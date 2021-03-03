import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Anime from "../components/anime"

interface PageProps {
  data: any
}

const IndexPage = ({data}:PageProps) => (
  <Layout>
    <SEO title="Home" />
    <h1>Anime</h1>
    {data && data.allContentfulAnime && data.allContentfulAnime.edges.map((item:any) => {
      return (<Anime
        key={item.node.id}
        description={item.node.description.description}
        image={item.node.image.file.url}
        imageAlt={item.node.image.title}
        title={item.node.title}
      />)
    })}
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export const query = graphql`
  query PageQuery {
    allContentfulAnime {
      edges {
        node {
          id
          title
          description {
            description
            id
          }
          image {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage

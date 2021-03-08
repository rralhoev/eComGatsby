import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Anime from "../components/anime"
import Brands from "../components/brands"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
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
  `)
  const [activeBrand, setActiveBrand] = React.useState('All');

  const changeActive = (e: any) => {
    setActiveBrand(e.target.textContent);
  }

  return (
    <Layout>
      <SEO title={activeBrand === 'All' ? 'Home' : activeBrand} />
      <Brands active={activeBrand} changeBrand={changeActive} />
      {data && data.allContentfulAnime && data.allContentfulAnime.edges.map((item:any) => {
        return (activeBrand === 'All' || item.node.title === activeBrand) && (
          <Anime
            key={item.node.id}
            description={item.node.description.description}
            image={item.node.image.file.url}
            imageAlt={item.node.image.title}
            title={item.node.title}
            activeBrand={activeBrand}
          />
        )
      })}
      <p>
        <Link to="/page-2/">Go to page 2</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

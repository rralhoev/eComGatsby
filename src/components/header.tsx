import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { Search } from "./search"

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle = "" }: HeaderProps) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1280,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Title style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            textTransform: `uppercase`
          }}
        >
          {siteTitle}
        </Link>
      </Title>
      <Search />
    </div>
  </header>
)

const Title = styled.h1`
  font-size: calc(1.5rem + 0.5 * ((100vw - 20rem) / 60));
  
  @media screen and (max-width: 900px) {
    font-size: calc(1rem + 0.5 * ((100vw - 20rem) / 60));
  }
`

export default Header;

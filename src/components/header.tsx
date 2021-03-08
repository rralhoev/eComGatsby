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
    <HeaderContainer>
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
    </HeaderContainer>
  </header>
)

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 10px;
  
  @media (max-width: 900px) {
    padding: 10px 0 0;
  }
`

const Title = styled.h1`
  font-size: calc(2rem + 0.5 * ((100vw - 50rem) / 60));
  
  @media screen and (max-width: 500px) {
    font-size: calc(1.5rem + 0.5 * ((100vw - 40rem) / 60));
  }
`

export default Header;

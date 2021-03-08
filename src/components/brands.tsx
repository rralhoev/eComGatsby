import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

interface BrandsProps {
  active:string,
  changeBrand: (e: any) => void,
}

const Brands = ({ active, changeBrand }:BrandsProps) => {
  const data = useStaticQuery(graphql`
    query BrandsQuery {
      allContentfulAnime {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  return (
    <BrandsContainer>
      <List>
        <li
          className={active === 'All' ? 'active' : ''}
          onClick={changeBrand}
        >
          All
        </li>
        {data && data.allContentfulAnime && data.allContentfulAnime.edges.map((item: {
          node: {
            id: string,
            title: string,
          }
        }) => {
          return (
            <li
              key={item.node.id}
              className={active === item.node.title ? 'active' : ''}
              onClick={changeBrand}
            >
              {item.node.title}
            </li>
          )
        })}
      </List>
    </BrandsContainer>
  )
}

const BrandsContainer = styled.div`
  padding: 10px 0 20px;
  overflow-x: scroll;

  @media (max-width: 500px) {
    padding: 20px 0 10px;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;

  li {
    margin: 0;
    padding: 5px 10px;
    border-radius: 12px;
    cursor: pointer;
    white-space: nowrap;
    
    &.active {
      background-color: #D8D7DC;
    }
    
    @media (max-width: 500px) {
      padding: 2px 10px;
      font-size: 12px;
      line-height: 16px;
    }
  }
`

export default Brands

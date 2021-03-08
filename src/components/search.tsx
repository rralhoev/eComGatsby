import React from "react"
import styled from "styled-components"
import { Input } from "./input"

interface SearchProps {
  active: boolean
}

export const Search = () => {
  const [active, setActive] = React.useState(false);

  return (
    <SearchBox active={active}>
      {active && <Input />}
      <IconBox
        onClick={() => setActive(!active)}
      >
        <span className="material-icons">search</span>
      </IconBox>
    </SearchBox>
  )
}

const SearchBox = styled.div<SearchProps>`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #D8D7DC;
  border-radius: ${({active}) => active ? '30px' : '50%'};
  height: 40px;
  
  @media screen and (max-width: 900px) {
    height: 30px;
    max-width: 240px;
  }

  @media screen and (max-width: 500px) {
    max-width: 150px;
  }
`

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color .1s linear;
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: #BDBDBD;
  }
  
  .material-icons {
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 900px) {
    width: 30px;
    height: 30px;
  }
`


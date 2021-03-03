import React from "react";
import styled from 'styled-components';

interface AnimeProps {
  title: string,
  description: string,
  image: string,
  imageAlt: string
}
const Anime = ({ title, description, image, imageAlt }:AnimeProps) => {
  return (
    <div>
      <Title className="title">
        {title}
      </Title>
      <Description className="description">
        {description}
      </Description>
      <img alt={imageAlt} src={image}/>
    </div>
  )
}

const Title = styled.b`
  font-size: 23px;
  line-height: 25px;
`

const Description = styled.div`
  padding: 20px 0;
`

export default Anime;

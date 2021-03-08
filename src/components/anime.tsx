import React from "react";
import styled from 'styled-components';
import { Picture } from "gatsby-plugin-image/dist/src/components/picture"

interface AnimeProps {
  title: string,
  description: string,
  image: string,
  imageAlt: string,
  activeBrand: string
}
const Anime = ({ title, description, image, imageAlt, activeBrand }:AnimeProps) => {
  return (
    <article>
      <Title className="title">
        {title}
      </Title>
      <PictureBox alt={imageAlt} src={image}/>
      <Description className="description">
        {description}
      </Description>
    </article>
  )
}

const Title = styled.h1`
  display: block;
  font-size: 35px;
  line-height: 38px;
`

const PictureBox = styled.img`
  margin: 0;
  width: 100%;
`

const Description = styled.div`
  padding: 20px 0;
`

export default Anime;

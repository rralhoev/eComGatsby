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
  font-size: calc(2rem + 0.3 * ((100vw - 100rem) / 60));
  line-height: calc(2rem + 0.5 * ((100vw - 60rem) / 60));
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

const PictureBox = styled.img`
  margin: 0;
  width: 100%;
`

const Description = styled.div`
  margin: 20px 0;
  font-size: calc(1rem + 0.3 * ((100vw - 60rem) / 60));
  line-height: calc(1rem + 0.5 * ((100vw - 40rem) / 60));
  
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`

export default Anime;

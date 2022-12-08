import React from "react"
import Layout from "../components/Layout";
import CallNowSection1 from "../components/CallNowSection1";
import MainBanner from "../components/MainBanner";
import MainAboutMe from "../components/MainAboutMe";
import ServicesSection from "../components/ServicesSection";
import {Container, Row, Carousel} from "react-bootstrap";
import Seo from "../components/Seo";
import Products from "../components/Products";
import Ajandekutalvany from "../components/Ajandekutalvany";

import { graphql } from "gatsby"

import Img from "gatsby-image"

export default function HomePage(props) {
  return (
    <Layout>
      <Seo
        metaTitle="Kozmetikai kezelések Győrben | Dorin Kozmetika - Győr"
        metaDescription="Kozmetikai kezelések széles választéka: klasszikus, relaxáló, Bruno Vassari speciális arckezelések, pedikűr, szempilla és szemöldök | Dorin Kozmetika - Győr"
        metaImage="../images/klasszikus_kezelesek_img.jpg"
      />
      <MainBanner/>
      <MainAboutMe/>
      <ServicesSection/>
      <Products/>
      <Ajandekutalvany/>
      
      <Container className="carouselContainer">
        <Row className="services-intro">
          <h2 className="services-intro-name">Képgaléria</h2>
          <div className="hr-block">
              <hr className="hr-row"></hr>
          </div>
          <div className="services-intro-logo">
              <i className="fa-brands fa-pagelines services-icon"></i>
          </div>
        </Row>
        <Carousel className="main-carousel">
          {props.data.slideImages.edges.map((element, index) =>(
            <Carousel.Item key={index}>
              <Img className="carousel-img"
                key={element.node.id}
                fluid={element.node.childImageSharp.fluid}
                alt={element.node.base}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      
      <CallNowSection1/>
    </Layout>
  )
}

export const query = graphql `
  query {
    slideImages: allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

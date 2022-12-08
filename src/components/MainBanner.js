import React from "react";
import {Container} from "react-bootstrap";

function MainBanner() {
  return (
    <section id="banner">
      <Container className="banner-container">
        <Container className="banner-block">
            <h1 className="banner-h1">Dorin Kozmetika</h1>
            <p>Győr, Dunapart Rezidencia Móricz Zsigmond rakpart 1/B</p>
            <button onClick={() => window.open("tel:+36204135877")} className="btn btn-banner btn-main-banner" type="button" name="button">
              <i className="fa-solid fa-mobile-screen-button idopontfoglalas-icon"></i>Időpontfoglalás
            </button>
            <a href="https://www.facebook.com/dorinkozmetika" className="btn btn-banner btn-main-banner">
              <i className="fa-brands fa-facebook idopontfoglalas-icon"></i>Időpontfoglalás
            </a>
        </Container>
      </Container>
      
    </section>
  )
}

export default MainBanner;

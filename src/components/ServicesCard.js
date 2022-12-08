import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import {Row, Col} from "react-bootstrap";

function ServicesCard() {
  return (
    <Row>
      <Col lg={4} md={6}>
        <div className="card">
          <Link to="/klasszikusKezelesek">
            <StaticImage className="card-img-top" src="../images/klasszikus_kezelesek_img.jpg" alt="Klasszikus arckezelések" />
          </Link>
          
          <div className="services-card-body">
            <h3 className="services-card-title">Klasszikus arckezelések</h3>
          </div>
        </div>
      </Col>

      <Col lg={4} md={6}>
        <div className="card">
          <Link to="/specialisArckezelesek">
            <StaticImage className="card-img-top" src="../images/BrunoVasari_img.jpg" alt="Bruno Vassari speciális arckezelések" />
          </Link>
          <div className="services-card-body">
            <h3 className="services-card-title">Bruno Vassari speciális arckezelések</h3>
          </div>
        </div>
      </Col>

      <Col lg={4} md={6}>
        <div className="card">
          <Link to="/relaxaloKezelesek">
            <StaticImage className="card-img-top" src="../images/Relax_img.jpg" alt="Relaxáló kezelések" />
          </Link>
          <div className="services-card-body">
            <h3 className="services-card-title">Relaxáló kezelések</h3>
          </div>
        </div>
      </Col>

      <Col lg={4} md={6}>
        <div className="card">
          <Link to="/gyantazas">
            <StaticImage className="card-img-top" src="../images/Gyantazas_kezeles_img.jpg" alt="Gyantázás" />
          </Link>
          <div className="services-card-body">
            <h3 className="services-card-title">Gyantázás</h3>
          </div>
        </div>
      </Col>

      <Col lg={4} md={6}>
        <div className="card">
          <Link to="/szemoldokSzempilla">
            <StaticImage className="card-img-top" src="../images/szempilla_img.jpg" alt="Szempilla és szemöldök" />
          </Link>
          <div className="services-card-body">
            <h3 className="services-card-title">Szempilla és szemöldök</h3>
          </div>
        </div>
      </Col>

      <Col lg={4} md={6}>
        <div className="card">
          <Link to="/pedikur">
            <StaticImage className="card-img-top" src="../images/Pedikur_img.jpg" alt="Pedikűr" />
          </Link>
          <div className="services-card-body">
            <h3 className="services-card-title">Pedikűr</h3>
          </div>
        </div>
      </Col>
    </Row>
    
  )
};

export default ServicesCard;

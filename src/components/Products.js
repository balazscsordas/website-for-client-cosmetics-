import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

function Products() {
    return (
        <section id="products">
            <Container fluid>
                <Row>
                    <div className="services-intro">
                        <h2 className="services-intro-name">Márkák, amikkel dolgozom:</h2>
                        <div className="hr-block">
                            <hr className="hr-row"></hr>
                        </div>
                        <div className="services-intro-logo">
                            <i className="fa-brands fa-pagelines services-icon"></i>
                        </div>
                    </div>
                    <Col className="imagesBlock">
                        <StaticImage className="productImg" src="../images/product2-logo.png" alt="Klasszikus arckezelések" />
                        <StaticImage className="productImg" src="../images/product1-logo.png" alt="Klasszikus arckezelések" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Products;
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

function Ajandekutalvany() {
    return (
        <section id="ajandekutalvany">
            <Container>
                <Row className="services-intro">
                    <h2 className="services-intro-name">Ajándékutalvány</h2>
                    <div className="hr-block">
                        <hr className="hr-row"></hr>
                    </div>
                    <div className="services-intro-logo">
                        <i className="fa-brands fa-pagelines services-icon"></i>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <StaticImage className="ajandekutalvanyImg" src="../images/ajandekutalvany.jpg" alt="Ajándékutalvány-image" />
                    </Col>

                    <Col lg={6}>
                        <h2>Pihentető élmény szépüléssel egybekötve</h2>
                        <p className="index-about-me-text">Olyan ajándékkal szeretnéd meglepni szeretteidet ami hasznos és személyre szabható?</p>
                        <p className="index-about-me-text">A kozmetikai ajándékkártya kiváló meglepetés szeretteidnek minden alkalomra  legyen szó születésnapról, névnapról, évfordulóról, vagy más jeles alkalmakról.  Válogass a relax élményt nyújtó regeneráló, fiatalító kezelések között. Az ajándékkártyát lehetőséged van tetszőleges összeggel feltölteni, ha nem tudod eldönteni minek is örülnének a legjobban.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Ajandekutalvany;
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/logo.png";

function Header() {

  return (
      <section id="navbar-section" className="fixed-top">
        <ul className="connections nav justify-content-center">
          <li className="navItem text-muted"><i className="fa-solid fa-mobile-screen-button idopontfoglalas-icon"></i>+36 20 413 5877</li>
          <li className="navItem text-muted"><i className="fa-regular fa-envelope-open idopontfoglalas-icon"></i>dorinkozmetika@gmail.com</li>
          <li className="navItem text-muted"><i className="fa-sharp fa-solid fa-location-dot idopontfoglalas-icon"></i>Győr, Dunapart Rezidencia Móricz Zsigmond rakpart 1/B</li>
        </ul>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
              <img className="logoImg" alt="Dorin Kozmetika" src={logo}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Kezdőoldal</Nav.Link>
                <Nav.Link href="/aboutMe">Rólam</Nav.Link>
                <NavDropdown title="Kezelések" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/klasszikusKezelesek">Klasszikus arckezelések</NavDropdown.Item>
                  <NavDropdown.Item href="/specialisArckezelesek">Bruno Vassari speciális arckezelések</NavDropdown.Item>
                  <NavDropdown.Item href="/relaxaloKezelesek">Relaxáló kezelések</NavDropdown.Item>
                  <NavDropdown.Item href="/gyantazas">Gyantázás</NavDropdown.Item>
                  <NavDropdown.Item href="/szemoldokSzempilla">Szempilla és szemöldök</NavDropdown.Item>
                  <NavDropdown.Item href="/pedikur">Pedikűr</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/pricelist">Árlista</Nav.Link>
                <Nav.Link href="/elerhetosegek">Elérhetőségek</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
  )
}

export default Header;
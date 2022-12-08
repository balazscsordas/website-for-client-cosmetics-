import React from "react";
import {Link} from "gatsby";

function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <footer className="footerclassName">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 dataList">
            <li className="nav-item text-muted"><i className="fa-solid fa-mobile-screen-button idopontfoglalas-icon"></i>+36 20 413 5877</li>
            <li className="nav-item text-muted"><i className="fa-regular fa-envelope-open idopontfoglalas-icon"></i>dorinkozmetika@gmail.com</li>
            <li className="nav-item text-muted"><i className="fa-sharp fa-solid fa-location-dot idopontfoglalas-icon"></i>Győr, Dunapart Rezidencia Móricz Zsigmond rakpart 1/B</li>
          </ul>

          <ul className="nav justify-content-center border-bottom pb-3 mb-3 linkList">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Kezdőoldal</Link></li>
            <li className="nav-item"><Link to="/aboutMe" className="nav-link px-2 text-muted">Rólam</Link></li>
            <li className="nav-item"><Link to="/kezelesek" className="nav-link px-2 text-muted">Kezelések</Link></li>
            <li className="nav-item"><Link to="/pricelist" className="nav-link px-2 text-muted">Árlista</Link></li>
            <li className="nav-item"><Link to="/elerhetosegek" className="nav-link px-2 text-muted">Elérhetőségek</Link></li>
          </ul>
          <p className="text-center text-muted copyright">Készítette: Csordás Balázs - &copy; 2022 Dorin Kozmetika</p>
        </footer>
      </div>
    </section>
  )
}

export default Footer;

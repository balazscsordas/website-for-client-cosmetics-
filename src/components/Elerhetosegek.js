import React from "react";
import Link from "gatsby-link";

function Elerhetosegek() {
  return (
    <section id="elerhetosegek-section">
      <div className="container-fluid price-list-container-fluid elerhetosegek-hatter">
        <h1 className="price-list-h1">Lépj velem kapcsolatba!</h1>
      </div>

      <div className="container container-elerhetosegek-oldal">
        <div className="row">

          <div className="col-lg-6">
            <h3 className="bejelentkezes-leiras cim">Bejelentkezéshez keress az alábbi elérhetőségek bármelyikén</h3>

            <div className="elerhetosegBlock">
              <div className="iconBlock">
                <i className="icon fa-sharp fa-solid fa-location-dot fa-2x"></i>
              </div>
              <div>
                <h3>Győr, Dunapart Rezidencia Móricz Zsigmond rakpart 1/B</h3>
                <p>Bejárat az utca felől</p>
              </div>
                
            </div>

            <div className="elerhetosegBlock">
              <div className="iconBlock">
                <i className="icon fa-solid fa-mobile-screen-button fa-2x"></i>
              </div>
              <div>
                <h3>+36 20 413 5877</h3>
              </div>
                
            </div>

            <div className="elerhetosegBlock">
              <div className="iconBlock">
                <i className="icon fa-regular fa-envelope-open fa-2x"></i>
              </div>
              <div>
                <h3>dorinkozmetika@gmail.com</h3>
              </div>
                
            </div>


            <div className="Kozossegi-oldalak">
              <h3 className="cim">Közösségi oldalaim</h3>
              <Link to="https://www.facebook.com/dorinkozmetika"><i className="fa-brands fa-facebook fa-2x kozossegi-icon text-muted"></i></Link>
              <Link to="https://www.instagram.com/dorinkozmetika/"><i className="fa-brands fa-instagram fa-2x kozossegi-icon text-muted"></i></Link>
            </div>

          </div>

          <div className="col-lg-6">
            <h3 className="cim">Kozmetika megközelítése</h3>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe title="Google Terkep" id="gmap_canvas" src="https://maps.google.com/maps?q=Dorin%20Kozmetika&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">

                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
};

export default Elerhetosegek;

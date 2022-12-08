import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function AboutMeSection() {
  return (
    <section id="aboutMeSection">
      <div className="container-fluid price-list-container-fluid rolam-hatter">
        <h1 className="price-list-h1">Üdvözöllek!</h1>
      </div>

      <div id="introduction">
        <div className="container aboutMeContainer">
          <div className="row">
            <div className="col-lg-6 aboutMeText">
              <h2>Üdvözöllek weboldalamon!</h2>
              <p>A Dorin Kozmetikában teljes nyugalomban, egyedüli vendégként élvezheted a személyre szabott kozmetikai kezelések széles választékát, a klasszikus és gyümölcssavas Spa élményű Callux lábápolás, illetve a kényeztető, relaxáló kezelések varázsát.</p>
              <p>A kezelések metódusával és a prémium spanyol márka Bruno Vassari által nyújtott látványos és tartós eredmények harmóniájával egy olyan helyet szeretnék biztosítani vendégeimnek ahova jó megérkezni és visszatérni.</p>
            </div>
            <div className="col-lg-6 aboutMePageImageCol">
              <StaticImage className="aboutMeImage" src="../images/rolam.jpg" alt="Dorin-kozmetika-gyor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutMeSection;

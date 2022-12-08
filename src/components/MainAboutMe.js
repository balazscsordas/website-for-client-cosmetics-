import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function MainAboutMe() {
  return (
    <section id="about-me">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 about-me-image-col">
            <StaticImage className="aboutMeImage" src="../images/rolam.jpg" alt="Dorin-kozmetika-gyor" />
          </div>
          <div className="col-lg-6">
            <h2>Üdvözöllek weboldalamon!</h2>
            <p className="index-about-me-text">A Dorin Kozmetikában teljes nyugalomban, egyedüli vendégként élvezheted a személyre szabott kozmetikai kezelések széles választékát, a klasszikus és gyümölcssavas Spa élményű Callux lábápolás, illetve a
              kényeztető, relaxáló kezelések varázsát.</p>
            <p className="index-about-me-text">A kezelések metódusával és a prémium spanyol márka Bruno Vassari által nyújtott látványos és tartós eredmények harmóniájával egy olyan helyet szeretnék biztosítani vendégeimnek ahova jó megérkezni
              és visszatérni.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainAboutMe;

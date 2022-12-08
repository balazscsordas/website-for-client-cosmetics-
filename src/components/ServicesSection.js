import React from "react";
import ServicesCard from "./ServicesCard";

function ServicesSection() {
  return (
    <section id="services">

      <div className="container">
        <div className="row services-intro">
          <h2 className="services-intro-name">Szolgáltatásaim</h2>
          <div className="hr-block">
            <hr className="hr-row"></hr>
          </div>

          <div className="services-intro-logo">
            <i className="fa-brands fa-pagelines services-icon"></i>
          </div>
        </div>

        <ServicesCard/>
      </div>
    </section>
  )
};

export default ServicesSection;

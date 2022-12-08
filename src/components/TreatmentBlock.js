import React from "react";
import TreatmentCard from "../components/TreatmentCard";
import services from "../components/lists/servicesList";
import Link from "gatsby-link";

function TreatmentBlock(props) {
  return (
    <section id="treatments-page-section">

      <div className={props.className}>
        <h1 className="price-list-h1">{services[props.number].name}</h1>
      </div>

      <div className="container">
        <div className="row">
        {services[props.number].treatments.map((element, index) =>(
          <TreatmentCard
            key={index}
            treatmentName={element.treatmentName}
            treatmentDescription={element.treatmentDescription}
            treatmentPrice={element.treatmentPrice}
            treatmentTime={element.treatmentTime}
            treatmentSteps={element.treatmentSteps}
            treatmentSubname={element.treatmentSubname}
            treatmentPlusDescription={element.treatmentPlusDescription}
            treatmentPlusPrice={element.treatmentPlusPrice}
            treatmentPlusTime={element.treatmentPlusTime}
            />
        ))}

        </div>
        
        <div className="kezelesekButtonBlock">
          <Link to="/kezelesek" className="btn btn-kezelesek btn-main-banner">Vissza a kezelésekhez</Link>
        </div>
      </div>
      
    </section>
  )
};

export default TreatmentBlock;

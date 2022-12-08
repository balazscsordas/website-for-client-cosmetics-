import React from "react";

function TreatmentCard(props) {
  return (
    <div className="col-lg-12">
      <div className="block">

        <div className="panel-title">
          <h2>{props.treatmentName}</h2>
        </div>

        {props.treatmentSubname && <p style={{textAlign: "center"}}>{props.treatmentSubname}</p>}

        {props.treatmentDescription !== "" && (
          <div className="treatment-description">
            <p>{props.treatmentDescription}</p>
          </div>
        )}

        {props.treatmentSteps !== "" && (
          <div>
            <p>Kezelés tartalma:</p>
            <ul className="treatment-steps">
              {props.treatmentSteps.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
          </div>
        )}

        <div className="row time-price">
          <div className="col-6 time">
            <p>{props.treatmentTime}</p>
          </div>
          <div className="col-6 price">
            <p>{props.treatmentPrice}</p>
          </div>
        </div>

        {props.treatmentPlusDescription && <p>{props.treatmentPlusDescription}</p>}

        {props.treatmentPlusPrice &&
          <div className="row time-price">
          <div className="col-6 time">
            <p>{props.treatmentPlusTime}</p>
          </div>
          <div className="col-6 price">
            <p>{props.treatmentPlusPrice}</p>
          </div>
        </div>}

      </div>
    </div>
  )
}

export default TreatmentCard;

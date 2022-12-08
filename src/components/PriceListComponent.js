import React from "react";

function PriceListComponent(props) {
  return (
    <div>
      <h2 className="treatment-category">{props.categoryName}</h2>

        {props.treatmentArray.map(element => (
          <div className="treatmentBlock">
            <div className="treatment-name-row">
              <p className="treatment-name">{element.treatmentName}</p>
              <p className="treatment-price">{element.treatmentPrice}</p>
            </div>

            <div className="treatment-description-row">
              <p>{element.treatmentDescription}</p>
            </div>
          </div>
          ))}
    </div>

  )
};

export default PriceListComponent;

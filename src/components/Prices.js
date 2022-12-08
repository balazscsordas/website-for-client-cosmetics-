import React from "react";
import PriceListComponent from "../components/PriceListComponent";
import services from "../components/lists/servicesList";

function Prices() {
  return (
    <section>
      <div className="container-fluid price-list-container-fluid arlista-hatter">
        <h1 className="price-list-h1">Árlista</h1>
      </div>
      <div className="container price-list-container">
        {services.map((element, index) =>(
          <div className="row pricelist-treatment-row">
            <PriceListComponent
              key={index}
              categoryName={element.name}
              treatmentArray={element.treatments}
            />
          </div>
        ))}
      </div>

    </section>
  )
};

export default Prices;

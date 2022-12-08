import React from "react";
import Layout from "../components/Layout";
import CallNowSection1 from "../components/CallNowSection1";
import TreatmentBlock from "../components/TreatmentBlock";
import Seo from "../components/Seo";

export default function GyantazasPage() {
  return (
    <Layout>
      <Seo
        key="3"
        metaTitle="Szőrtelenítés - gyantázás | Dorin Kozmetika - Győr"
        metaDescription="Szolgáltatásaim között megtalálható a gyantázás is, árak, illetve további információk a linkre kattintva a weboldalon érhetők el. | Dorin Kozmetika - Győr"
        metaImage="../images/klasszikus_kezelesek_img.jpg"
      />
      <TreatmentBlock 
        number={3}
        className={"container-fluid price-list-container-fluid gyantazas-container"}
      />
      <CallNowSection1 />
    </Layout>
  )
}

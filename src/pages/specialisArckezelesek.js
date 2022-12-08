import React from "react";
import Layout from "../components/Layout";
import CallNowSection1 from "../components/CallNowSection1";
import TreatmentBlock from "../components/TreatmentBlock";
import Seo from "../components/Seo";

export default function SpecialisArckezelesekPage() {
  return (
    <Layout>
      <Seo
        key="9"
        metaTitle="Speciális arckezelések | Dorin Kozmetika - Győr"
        metaDescription="Speciális növényi őssejtes, hialuronsavas, intenzív bőrfeszesítő, mélyhidratáló kozmetikai kezelések a fiatalos, élettel teli bőrért | Dorin Kozmetika - Győr"
        metaImage="../images/klasszikus_kezelesek_img.jpg"
      />
      <TreatmentBlock 
        number={1}
        className={"container-fluid price-list-container-fluid specialis-kezelesek-container"}
      />
      <CallNowSection1 />
    </Layout>
  )
}

import React from "react";
import Layout from "../components/Layout";
import CallNowSection1 from "../components/CallNowSection1";
import TreatmentBlock from "../components/TreatmentBlock";
import Seo from "../components/Seo";

export default function KlasszikusKezelesekPage() {
  return (
    <Layout>
      <Seo
        key="5"
        metaTitle="Klasszikus arckezelések | Dorin Kozmetika - Győr"
        metaDescription="Klasszikus kis és nagykezelés, peptides, illetve tinikezelés pattanásos bőr kezelésére az ápolt, szép bőr elérése érdekében. | Dorin Kozmetika - Győr"
        metaImage="../images/klasszikus_kezelesek_img.jpg"
      />
      <TreatmentBlock 
        number={0}
        className={"container-fluid price-list-container-fluid klasszikus-kezelesek-container"}
      />
      <CallNowSection1 />
    </Layout>
  )
}

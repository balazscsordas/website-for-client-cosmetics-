import React from "react";
import Layout from "../components/Layout";
import CallNowSection1 from "../components/CallNowSection1";
import TreatmentBlock from "../components/TreatmentBlock";
import Seo from "../components/Seo";

export default function PedikurPage() {
  return (
    <Layout>
      <Seo
        key="6"
        metaTitle="Klasszikus + Callux pedikűr | Dorin Kozmetika - Győr"
        metaDescription="Klasszikus, illetve Callux gyümölcssavas szike nélküli pedikűr sérülésveszély nélkül az egyenletesen sima és selymes lábakért  | Dorin Kozmetika - Győr"
        metaImage="../images/klasszikus_kezelesek_img.jpg"
      />
      <TreatmentBlock 
        number={5}
        className={"container-fluid price-list-container-fluid pedikur-container"}
      />
      <CallNowSection1 />
    </Layout>
  )
}

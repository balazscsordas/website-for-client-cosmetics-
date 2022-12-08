import React from "react";
import Layout from "../components/Layout";
import CallNowSection1 from "../components/CallNowSection1";
import TreatmentBlock from "../components/TreatmentBlock";
import Seo from "../components/Seo";

export default function RelaxaloKezelesekPage() {
  return (
    <Layout>
      <Seo
        key="8"
        metaTitle="Relaxáló, kényeztető kezelések | Dorin Kozmetika - Győr"
        metaDescription="Szakadj ki a hétköznapi nyüzsgésből és élvezd a relaxáló és pihentető kezelések frissítő hatását Győrben a Dorin Kozmetikában."
        metaImage="../images/klasszikus_kezelesek_img.jpg"
      />
      <TreatmentBlock 
        number={2}
        className={"container-fluid price-list-container-fluid relax-container"}
      />
      <CallNowSection1 />
    </Layout>
  )
}

import React from "react";
import Layout from "../components/Layout";
import CallNowSection1 from "../components/CallNowSection1";
import Elerhetosegek from "../components/Elerhetosegek";
import Seo from "../components/Seo";

export default function ElerhetosegekPage() {
  return (
    <Layout>
      <Seo
        key="2"
        metaTitle="Elérhetőségek | Dorin Kozmetika - Győr"
        metaDescription="Időpontegyeztetéshez bátran hívj az alábbi telefonszámon: +36204135877, cím: Győr, Dunapart Rezidencia Móricz Zsigmond rakpart 1/B | Dorin Kozmetika - Győr"
        metaImage="../images/klasszikus_kezelesek_img.jpg"
      />
      <Elerhetosegek />
      <CallNowSection1 />
    </Layout>
  )
}

import React from "react";
import Layout from "../components/Layout";
import CallNowSection1 from "../components/CallNowSection1";
import Prices from "../components/Prices";
import Seo from "../components/Seo";

export default function PricelistPage() {
  return (
    <Layout>
      <Seo
        key="7"
        metaTitle="Kezelések és árak | Dorin Kozmetika - Győr"
        metaDescription="Kozmetikai kezelések széles választéka: klasszikus, relaxáló, Bruno Vassari speciális arckezelések, pedikűr, szempilla és szemöldök | Dorin Kozmetika - Győr"
        metaImage="../images/klasszikus_kezelesek_img.jpg"
      />
      <Prices />
      <CallNowSection1 />
    </Layout>
  )
}

import React from "react";
import Layout from "../components/Layout";
import CallNowSection1 from "../components/CallNowSection1";
import AboutMeSection from "../components/AboutMeSection";
import Seo from "../components/Seo";

export default function aboutMePage() {
  return (
    <Layout>
      <Seo
        key="1"
        metaTitle="Tudj meg többet rólam | Dorin Kozmetika - Győr"
        metaDescription="Kozmetikai kezelések széles választéka: klasszikus, relaxáló, Bruno Vassari speciális arckezelések, pedikűr, szempilla és szemöldök | Dorin Kozmetika - Győr"
        metaImage="../images/klasszikus_kezelesek_img.jpg"
      />
      <AboutMeSection />
      <CallNowSection1 />
    </Layout>
  )
}

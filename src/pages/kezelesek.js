import React from "react"
import Layout from "../components/Layout";
import CallNowSection1 from "../components/CallNowSection1";
import ServicesSection from "../components/ServicesSection";
import Seo from "../components/Seo";


export default function KezelesekPage(props) {
  return (
    <Layout>
      <Seo
        key="4"
        metaTitle="Kozmetikai kezelések Győrben | Dorin Kozmetika - Győr"
        metaDescription="Kozmetikai kezelések széles választéka: klasszikus, relaxáló, Bruno Vassari speciális arckezelések, pedikűr, szempilla és szemöldök | Dorin Kozmetika - Győr"
        metaImage="../images/klasszikus_kezelesek_img.jpg"
      />
       <section id="osszesKezelesPage">
        <div className="container-fluid price-list-container-fluid kezelesek-hatter">
            <h1 className="price-list-h1">Szolgáltatásaim</h1>
        </div>
        <ServicesSection/>
      </section>
      
      <CallNowSection1/>
    </Layout>
  )
}

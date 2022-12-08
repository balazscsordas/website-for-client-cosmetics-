import React from "react";
import Layout from "../components/Layout";
import CallNowSection1 from "../components/CallNowSection1";
import TreatmentBlock from "../components/TreatmentBlock";
import Seo from "../components/Seo";

export default function SzemoldokSzempillaPage() {
  return (
    <Layout>
      <Seo
        key="9"
        metaTitle="Szempilla építés | Dorin Kozmetika - Győr"
        metaDescription="Klasszikus szempilla építés, szempilla lifting, szemöldök, szempilla festés a minden tekintetet bevonzó hatás elérése érdekében. | Dorin Kozmetika - Győr"
        metaImage="../images/klasszikus_kezelesek_img.jpg"
      />
      <TreatmentBlock 
        number={4}
        className={"container-fluid price-list-container-fluid szempilla-container"}
      />
      <CallNowSection1 />
    </Layout>
  )
}

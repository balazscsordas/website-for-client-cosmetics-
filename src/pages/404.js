import React from "react";
import Layout from "../components/Layout";
import Link from "gatsby-link";

export default function NotFoundPage() {
  return (
    <Layout>
      <section id="404section">
        <div className="container-fluid price-list-container-fluid">
          <h1 className="price-list-h1">Upsz..</h1>
        </div>
        <div style={{marginTop: "30px", textAlign: "center"}}>
          <h2 style={{marginBottom: "20px"}}>Ilyen oldal sajnos nem létezik</h2>
          <Link to="/" className="btn btn-primary btn-banner">Vissza a főoldalra</Link>
        </div>
        
      </section>
    </Layout>
  )
}


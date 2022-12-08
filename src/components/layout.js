import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.scss";
import Header from "./Header";
import {Helmet} from "react-helmet";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Layout({ children }) {

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      let connections = document.getElementsByClassName("connections")[0];
      let navbarBrand = document.getElementsByClassName("navbar-brand")[0];
      let navbarSection = document.getElementById("navbar-section");
  
      if (window.screen.width > 992) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          connections.classList.add("border-bottom");
          navbarSection.style.backgroundColor = "white";
          navbarBrand.style.display = "none";
        } else {
          connections.classList.remove("border-bottom");
          navbarSection.style.backgroundColor = "transparent";
          navbarBrand.style.display = "block";
        }
      };
  
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTheTop").style.display="block";
      } else {
        document.getElementById("scrollToTheTop").style.display="none";
      }
    };
  }
  


  return (
    <div>
      <Helmet>
        {/* (Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

        {/* font awesome */}
        <script src="https://kit.fontawesome.com/964fe86c90.js" crossorigin="anonymous"></script>
      </Helmet>
      <Header />
        {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

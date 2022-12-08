import React from "react";

function CallNowSection1() {

  return (
    <section id="call-now-section-1">
      <div className="container">
        <div className="row call-now-row-1">
          <div className="col-lg-6">
            <h2 className="call-now-text-1">Jelentkezz be hozzám!</h2>
          </div>

          <div className="col-lg-6 call-now-button-1">
            <button onClick={() => window.open("tel:+36204135877")} className="btn btn-light btn-banner" type="button" name="button">
              <i className="fa-solid fa-mobile-screen-button idopontfoglalas-icon"></i>Időpontfoglalás
            </button>
            <a href="https://www.facebook.com/dorinkozmetika" className="btn btn-light btn-banner">
              <i className="fa-brands fa-facebook idopontfoglalas-icon"></i>Időpontfoglalás
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CallNowSection1;

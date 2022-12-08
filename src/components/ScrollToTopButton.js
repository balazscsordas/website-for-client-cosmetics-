import React from "react";

function ScrollToTopButton() {

  function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button onClick={goTop} type="button" className="btn btn-danger btn-lg scrollToTheTop" id="scrollToTheTop">
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}

export default ScrollToTopButton;

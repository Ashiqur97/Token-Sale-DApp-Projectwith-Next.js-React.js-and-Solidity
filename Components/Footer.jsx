import React from "react";

const Footer = () => {
  const footerList = ["Cryptocash","How its work","Token","FAQ","Contact"];
  return <footer>
    <div 
    className="top_footer bg_light_dark"
    data-z-index="1"
    data-parallax="scroll"
    data-image-src="assets/images/footer_bg.png"
    >
      <div className="container">
          <div className="row">
              <div className="col-lg-4 col-md-12">
                  <div 
                  className="footer_logo mb-3 animation"
                  data-animation="fadeInUp"
                  data-animation-deplay="0.2s"
                  >
                      <a href="#home_section" className="page-scroll">
                          <img src="assets/images/footer_logo.png" alt="" />
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </footer>;
};

export default Footer;

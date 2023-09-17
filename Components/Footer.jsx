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

                  <div className="footer_desc">
                    <p 
                    className="animation" 
                    data-animation="fadeInUp" 
                    data-animation-delay="0.4s">
                      Lorem ipsum dolor sit amet, 
                      consectetur adipisicing elit. Accusantium earum facilis rem quam alias! 
                      Deleniti quidem modi eligendi laboriosam enim dignissimos ducimus, 
                      impedit dolor? Magnam corporis facere praesentium sapiente! Excepturi.
                    </p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
              <h4 
              className="footer_title border_title animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                  Quick Links
              </h4>
              <ul className="footer_link">
              
                {
                  footerList.map((list,i) =>(
                    <li 
                    className="animation" 
                    data-animation="fadeInUp"
                    data-animation-delay={`0.${i+2}s`}>
                        <a href="#">{list}</a>
                    </li>
                  ))
                }
          
              </ul>
              </div>
              <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
                <div className="newsletter_from">
                  <h4 className="footer_title border_title animation">
                    Newsletter
                  </h4>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                      Vel et nemo soluta doloribus qui amet nesciunt ut eum perspiciatis.
                  </p>
                  <form action="#" 
                  className="subscribe_from_animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                  >
                    <input type="text" className="input-rounded"/>
                  </form>
                </div>
              </div>
          </div>
      </div>
    </div>
  </footer>;
};

export default Footer;

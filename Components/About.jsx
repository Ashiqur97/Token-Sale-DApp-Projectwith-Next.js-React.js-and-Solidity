import React from "react";
import {BsArrowRight} from 'react-icons/bs'

const About = () => {
  return <section id="about" className="small_pt">
    <div className="container">
      <div className="row slign-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text_md_center">
                  <img src="assets/images/about_img2.png" 
                  alt=""
                  data-animation="zoomIn"
                  data-animation-delay="0.2s" 
                  className="animation" 
                  />
              </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
              <div className="title_default_light title_border">
                  <h4 c
                  lassName="animation" 
                  data-animation-delay="0.2s" 
                  data-animation="fadeInUp">
                      About The Cryptocash
                  </h4>
              </div>
          </div>
      </div>
    </div>
  </section>;
};

export default About;

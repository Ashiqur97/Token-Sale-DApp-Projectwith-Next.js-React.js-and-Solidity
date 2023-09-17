import React from "react";
import {BsCurrencyBitcoin,BsArrowRight} from "react-icons/bs";
import {FaEthereum} from "react-icons/fa";
import {SiRipple,SiLitecoin} from "react-icons/si";
import {AiOutlineCloudDownload} from "react-icons/ai";

const Banner = ({transferNativeToken}) => {
  return <section 
  id="home_section" 
  className="section_banner bg_black_dark" 
  data-zindex="1" 
  data-parallax="scroll" 
  data-image-src="assets/images/banner_bg2.png"
  >
    <div className="banner_effect"></div> 
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
              <div className="banner_text_s2 text_md_center">
                <h1 
                className="animation text-white" 
                data-animation="fadeInUp" 
                data-animation-delay="1.1s"
                >
                  <strong>Bitcoin</strong> peer to peer innovative
                  <strong>network</strong>
                </h1>
                <h5 
                className="animation presale_txt text-white"
                data-animation="fadeInUp" 
                data-animation-delay="1.3s"
                >
                  Token Presale is <mark className="gradient_box">Live</mark>
                </h5>

                <div 
                className="btn_group pt-2 pb-3 animation" 
                data-animation="fadeInUp" 
                data-animation-delay="1.4s">
                    <a></a>
                </div>
              </div>
            </div>
        </div>
      </div> 
    </section>;
};

export default Banner;

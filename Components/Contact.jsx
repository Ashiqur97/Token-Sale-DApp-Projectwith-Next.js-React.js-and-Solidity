import React from "react";
import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return <section id="contract" className="contract_section small_pt">
      <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="title-default_light title_border text-center">
                    <h4 className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.2s"
                    >
                      Get In Touch
                    </h4>
                </div>
            </div>
          </div>
          <div className="row align-items-center small_space">
              <div className="col-lg-4 col-md-6 offset-lg-2">
                    <div className="bg_light_dark contact_box_s2 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.1s"
                    >
                      <div className="contact_title">
                          <h5 className="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.2s"
                          >
                            Contact With Us
                          </h5>
                          <p className="animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.2s"
                          >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Veniam ipsam dolores officia laudantium alias enim eum, 
                            blanditiis repellendus dicta deleniti tenetur eos quia quas.
                             Non neque quidem nemo quia maiores.
                          </p>
                      </div>

                      <ul className="list_none contact_info mt-margin">
                            <li className="animation"
                              data-animation="fadeInUp"
                              data-animation-delay="0.2s"
                            >
                              <div className="contact_detail">
                                  <span>Address</span>
                                  <p>22 International Divison</p>
                              </div>
                            </li>
                      </ul>
                    </div>
              </div>
          </div>
      </div>
  </section>
};

export default Contact;

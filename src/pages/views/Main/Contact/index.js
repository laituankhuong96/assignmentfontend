import React from "react";
import PropTypes from "prop-types";

const Contact = ({ products }) => {
  return (
    <div>
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="./index.html">
                  <i className="fa fa-home" /> Home
                </a>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Contact Section Begin */}
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__content">
                <div className="contact__address">
                  <h5>Contact info</h5>
                  <ul>
                    <li>
                      <h6>
                        <i className="fa fa-map-marker" /> Address
                      </h6>
                      <p>số nhà 2 ngách 33 ngõ 105 Doãn Kế Thiện- Mai Dịch</p>
                    </li>
                    <li>
                      <h6>
                        <i className="fa fa-phone" /> Phone
                      </h6>
                      <p>
                        <span>0392792458</span>
                      </p>
                    </li>
                    <li>
                      <h6>
                        <i className="fa fa-headphones" /> Support
                      </h6>
                      <p>KhuongLTPH09152@fpt.edu.vn</p>
                    </li>
                  </ul>
                </div>
                <div className="contact__form">
                  <h5>SEND MESSAGE</h5>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Website" />
                    <textarea placeholder="Message" defaultValue={""} />
                    <button type="submit" className="site-btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__map">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.480489924078!2d105.72925301484206!3d21.053463092310544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454577d412e23%3A0x680cfee721969a8!2zODAsIDcgVHUgSG_DoG5nLCBQaMawxqFuZyBDYW5oLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1596594597300!5m2!1svi!2s"
                  height={780}
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;

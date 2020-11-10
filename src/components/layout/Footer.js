import React, { Fragment } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <footer className="fixed-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-12 order-md-1 order-2">
              <p className="text-color mb-0">
                Hanoverian Saudi Chocolate © 2020
              </p>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-end  order-md-2 order-1">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <FaFacebookF />
                </li>
                <li className="list-inline-item">
                  <FaTwitter />
                </li>
                <li className="list-inline-item">
                  <FaInstagram />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
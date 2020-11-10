import React, { Fragment } from "react";
import { FiHeart, FiMenu, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <Fragment>
      <header className="fixed-top">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-6">
              <h3 className="mb-0 text-uppercase">Hanoverian</h3>
            </div>
            <div className="col-md-6 col-6 d-flex justify-content-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <FiHeart />
                </li>
                <li className="list-inline-item">
                  <FiShoppingCart />
                </li>
                <li className="list-inline-item">
                  <FiMenu />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
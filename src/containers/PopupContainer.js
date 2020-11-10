import React, { Fragment } from "react";

const PopupContainer = ({ title, size, children }) => {
  return (
    <Fragment>
      <section className="content-wrapper">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-12 text-center">
              <h1 className="mb-0 title-text">{title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className={`popup-container ${size}`}>{children}</div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PopupContainer;
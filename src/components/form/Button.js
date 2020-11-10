import React, { Fragment } from "react";

const Button = (props) => {
  return (
    <Fragment>
      <div className={props.col}>
        <div className="form-group d-flex justify-content-center">
            <button className="btn main-btn text-uppercase">
                {props.title}
            </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Button;
import React, { Fragment } from "react";

const Form = ({ className, children }) => {
  return (
    <Fragment>
      <form className={className}>
        <div className="row">
          {children}
        </div>
      </form>
    </Fragment>
  );
};

export default Form
import React, { Fragment } from "react";

const InputField = (props) => {
  return (
    <Fragment>
      <div className={props.col}>
        <div className="form-group input-error">
          <label className={props.required} htmlFor={props.name}>
            {props.label}
          </label>
          <input
            className="form-control"
            id={props.name}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            {...props}
          />
          <small>This field is required</small>
        </div>
      </div>
    </Fragment>
  );
};

export default InputField
import React, { Fragment } from "react";
import Button from "../../components/form/Button";
import Checkbox from "../../components/form/Checkbox";
import Form from "../../components/form/Form";
import InputField from "../../components/form/InputField";
import PopupContainer from "../../containers/PopupContainer";


const Login = () => {
  return (
    <Fragment>
      <PopupContainer title={"Log In"} size="popup-container-sm">
        <Form className="w-100">
          <InputField
            required="required"
            col="col-md-12"
            name="email"
            type="email"
            label="Email address"
          />
          <InputField
            required="required"
            col="col-md-12"
            name="password"
            type="password"
            label="Password"
          />
          <Checkbox col="col-md-12" name="loggedIn" label="Keep me logged in" />
          <Button col="col-md-12" title="Log in" />
          <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
              <p className="text-color mb-0">
                Don’t have an account?{" "}
                <span className="dark-text-color text-underline">Sign Up</span>
              </p>
              <p className="dark-text-color text-underline mb-0">
                Forgot Password?
              </p>
          </div>            
        </Form>
      </PopupContainer>
    </Fragment>
  );
};

export default Login;
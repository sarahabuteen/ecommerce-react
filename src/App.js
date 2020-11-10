import React, { Component, Fragment } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Login from "./views/authentication/Login";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Login />
        <Footer />
      </Fragment>
    );
  }
}

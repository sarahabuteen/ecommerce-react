import React, { Component, Fragment } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
    );
  }
}

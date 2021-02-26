import React, { Component } from "react";
import Card from "./components/card";
import Product from "./components/product";

export default class App extends Component {
  render() {
    return (
      <div>
        <Product />
        <Card />
      </div>
    );
  }
}

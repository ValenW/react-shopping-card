import React, { Component } from "react";
import Cart from "./components/cart";
import Product from "./components/product";

export default class App extends Component {
  render() {
    return (
      <div>
        <Product />
        <Cart />
      </div>
    );
  }
}

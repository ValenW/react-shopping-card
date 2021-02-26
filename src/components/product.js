import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/product/action";

class Product extends Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    return (
      <section className="container content-section">
        <h2 className="section-header">商品列表</h2>
        <div className="shop-items">
          {this.props.products.map((p) => (
            <div className="shop-item" key={p.id}>
              <img alt="" className="shop-item-image" src={p.thumbnail} />
              <span className="shop-item-title">{p.title}</span>
              <div className="shop-item-details">
                <span className="shop-item-price">￥{p.price}</span>
                <button
                  className="btn btn-primary shop-item-button"
                  type="button">
                  加入购物车
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Product);

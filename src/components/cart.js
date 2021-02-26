import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cardActions from "../store/cart/action";

class Card extends Component {
  get totalPrice() {
    return this.props.cart.reduce((acc, cur) => {
      acc += cur.count * cur.price;
      return acc;
    }, 0);
  }

  changeCount(event, id) {
    this.props.changeCount({ cid: id, count: event.target.value });
  }

  deleteProd(id) {
    this.props.deleteProduct(id);
  }

  componentDidMount() {
    this.props.loadCart();
  }

  render() {
    return (
      <section className="container content-section">
        <h2 className="section-header">购物车</h2>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">商品</span>
          <span className="cart-price cart-header cart-column">价格</span>
          <span className="cart-quantity cart-header cart-column">数量</span>
        </div>
        <div className="cart-items">
          {this.props.cart.map((p) => (
            <div className="cart-row" key={p.id}>
              <div className="cart-item cart-column">
                <img
                  alt=""
                  className="cart-item-image"
                  src={`http://localhost:3005${p.thumbnail}`}
                  width="100"
                  height="100"
                />
                <span className="cart-item-title">{p.title}</span>
              </div>
              <span className="cart-price cart-column">￥{p.price}</span>
              <div className="cart-quantity cart-column">
                <input
                  className="cart-quantity-input"
                  type="number"
                  value={p.count}
                  min="1"
                  onChange={(e) => this.changeCount(e, p.id)}
                />
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => this.deleteProd(p.id)}>
                  删除
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <strong className="cart-total-title">总价</strong>
          <span className="cart-total-price">￥{this.totalPrice}</span>
        </div>
      </section>
    );
  }
}

const mapStateToProp = (state) => ({
  cart: state.cart,
});

const mapActionToProp = (dispatch) => bindActionCreators(cardActions, dispatch);

export default connect(mapStateToProp, mapActionToProp)(Card);

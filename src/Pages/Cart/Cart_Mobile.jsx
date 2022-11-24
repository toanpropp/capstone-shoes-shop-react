import axios from "axios";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  removeFromCart,
  addShoesAction,
} from "../../redux/cartReducer/cartReducer";

export default function Cart() {
  const { listShoes } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const handleOrder = async () => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/order",
        method: "POST",
        data: listShoes,
      });
      alert(result.data.message);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="cart-shoes-m">
      <h4 className="cart-title-m container">
        Carts
        <hr />
      </h4>
      <div className="cart-form-m">
        <div className="container">
          {listShoes.map((item, index) => {
            return (
              <div className="cart-item-m" key={index}>
                <div className="img-m">
                  <img src={item.image} alt="..." />
                </div>
                <div className="info-m">
                  <p className="name-m">{item.name}</p>
                  <p className="des-m">{item.description}</p>
                  <p className="price-m">Price:{item.price}$</p>
                  <div className="increase-decrease-m">
                    <button
                      className="increase-m"
                      onClick={() => {
                        dispatch(addShoesAction(item));
                      }}
                    >
                      +
                    </button>
                    <span className="quantity-m">{item.cartQuantity}</span>
                    <button
                      className="decrease-m"
                      onClick={() => {
                        dispatch(decreaseQuantity(item));
                      }}
                    >
                      -
                    </button>
                  </div>
                  <p className="price-m" style={{ marginTop: 20 }}>
                    Total:
                    {item.cartQuantity * item.price.toLocaleString()}$
                  </p>
                </div>
                <div
                  className="remove-item"
                  onClick={() => {
                    dispatch(removeFromCart(item));
                  }}
                >
                  <DeleteOutlined />
                </div>
              </div>
            );
          })}
          <div className="order">
            <button
              type="submit"
              className="btn-order"
              onClick={() => {
                handleOrder();
              }}
            >
              Order Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

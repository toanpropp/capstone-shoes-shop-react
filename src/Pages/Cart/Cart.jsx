import React from "react";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  removeFromCart,
  addShoesAction,
  orderApi,
} from "../../redux/cartReducer/cartReducer";

export default function Cart() {
  const { listShoes } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const handleOrder = (item) => {
    // dispatch(orderApi(item));
  };
  return (
    <div className="cart-shoes">
      <h4 className="cart-title container">
        Carts
        <hr />
      </h4>
      <div className="cart-form">
        <div className="container">
          <table className="table">
            <thead style={{ background: "#d9d9d9", padding: "5px 10px" }}>
              <tr
                style={{
                  color: "#000000",
                  fontSize: 20,
                  fontWeight: "400",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                <td>ID</td>
                <td>Image</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {listShoes?.map((item, index) => {
                return (
                  <tr
                    style={{
                      padding: "20px 0",
                      color: "#000000",
                      fontSize: 20,
                      fontWeight: "400",
                      lineHeight: "24px",
                      textAlign: "center",
                    }}
                    key={index}
                  >
                    <td>{item.id}</td>
                    <td>
                      <img
                        src={item.image}
                        style={{ width: "100px" }}
                        alt="..."
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price.toLocaleString()}$</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        style={{ padding: "10px 15px" }}
                        onClick={() => {
                          dispatch(addShoesAction(item));
                        }}
                      >
                        +
                      </button>
                      <span className="mx-2">{item.cartQuantity}</span>
                      <button
                        className="btn btn-primary"
                        style={{ padding: "10px 15px" }}
                        onClick={() => {
                          dispatch(decreaseQuantity(item));
                        }}
                      >
                        -
                      </button>
                    </td>
                    <td>{item.cartQuantity * item.price.toLocaleString()}$</td>
                    <td>
                      <button className="btn-edit">Edit</button>
                      <button
                        className="btn-del mx-2"
                        onClick={() => {
                          dispatch(removeFromCart(item));
                          message.success(`Delete ${item.name} completed!`);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr style={{ borderStyle: "none" }}>
                <td colSpan={7}></td>
                <td>
                  <button
                    className="order"
                    onClick={() => {
                      handleOrder(listShoes);
                    }}
                  >
                    Submit Order
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

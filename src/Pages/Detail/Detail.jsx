import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { message } from "antd";
import { addShoesAction } from "../../redux/cartReducer/cartReducer";
import {
  getProduceDetailApiById,
  addQuantityAction,
  decreaseQuantity,
} from "../../redux/productReducer/productReducer";
export default function Detail() {
  const { productDetail } = useSelector((state) => state.productReducer);
  console.log(
    "useSelector((state) => state.productReducer)",
    useSelector((state) => state.productReducer)
  );
  console.log(productDetail);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const action = getProduceDetailApiById(id);
    dispatch(action);
  }, [id, dispatch]);
  return (
    <div className="detail">
      <div className="product-cart">
        <div className="container">
          <div className="img">
            <img src={productDetail.image} alt="..." />
          </div>
          <div className="item-info">
            <h1 className="name">{productDetail.name}</h1>
            <p className="des">{productDetail.description}</p>
            <div className="product-size">
              <h4>Avaiable size</h4>
              <div className="size">
                {productDetail.size?.map((s, index) => {
                  return <span key={index}>{s}</span>;
                })}
              </div>
            </div>
            <div className="cost">{productDetail.price}$</div>
            <div className="plus-minus">
              <span
                className="plus"
                onClick={() => {
                  dispatch(addQuantityAction(productDetail));
                }}
              >
                +
              </span>
              <span className="quantity">{productDetail.cartQuantity}</span>
              <span
                className="minus"
                onClick={() => {
                  dispatch(decreaseQuantity(productDetail));
                }}
              >
                -
              </span>
            </div>
            <button
              className="btn-addtocart"
              onClick={() => {
                const action = addShoesAction(productDetail);
                dispatch(action);
                message.success(`Success added ${productDetail.name} to cart!`);
                console.log(action);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="product-relate ">
        <h3>- Relate Product -</h3>
        <div className="container">
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="product-item" key={index}>
                <div className="cart-info">
                  <div className="img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="name-des">
                    <p className="name">{item.name}</p>
                    <p className="des">{item.description}</p>
                  </div>
                </div>
                <div className="buy-cost">
                  <NavLink className="btn-buy" to={`/detail/${item.id}`}>
                    Buy now
                  </NavLink>
                  <div className="cost">
                    <span>{item.price}$</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

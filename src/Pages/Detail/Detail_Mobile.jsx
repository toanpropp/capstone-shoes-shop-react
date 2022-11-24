import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { addItemToCart } from "../../redux/cartReducer/cartReducer";
import {
  getProduceDetailApiById,
  addQuantityAction,
  decreaseQuantity,
} from "../../redux/productReducer/productReducer";
export default function Detail() {
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    const action = getProduceDetailApiById(id);
    dispatch(action);
  }, [id, dispatch]);
  return (
    <div className="detail-m">
      <div className="product-cart-m">
        <div className="container">
          <div className="img-m">
            <img src={productDetail.image} alt="..." />
          </div>
          <div className="item-info-m">
            <h1 className="name-m">{productDetail.name}</h1>
            <p className="des-m">{productDetail.description}</p>
            <div className="product-size-m">
              <h4>Avaiable size</h4>
              <div className="size-m">
                {productDetail.size?.map((s, index) => {
                  return <span key={index}>{s}</span>;
                })}
              </div>
            </div>
            <div className="cost-m">{productDetail.price}$</div>
            <div className="plus-minus-m">
              <span
                className="plus-m"
                onClick={() => {
                  dispatch(addQuantityAction(productDetail));
                }}
              >
                +
              </span>
              <span className="quantity-m">{productDetail.cartQuantity}</span>
              <span
                className="minus-m"
                onClick={() => {
                  dispatch(decreaseQuantity(productDetail));
                }}
              >
                -
              </span>
            </div>
            <button
              className="btn-addtocart-m"
              onClick={() => {
                const action = addItemToCart(productDetail);
                dispatch(action);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="product-relate-m ">
        <h3>- Relate Product -</h3>
        <div className="container">
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="product-item-m" key={index}>
                <div className="img-m">
                  {" "}
                  <img src={item.image} alt="..." />
                </div>
                <div className="cart-info-m">
                  <div className="name-des-m">
                    <p className="name-m">{item.name}</p>
                    <p className="des-m">
                      {item.description.length > 75
                        ? item.description.substr(0, 75) + ""
                        : item.description}
                    </p>
                    <span className="cost-m">{item.price}$</span>
                  </div>
                  <NavLink className="view-detail-m" to={`/detail/${item.id}`}>
                    View Detail
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

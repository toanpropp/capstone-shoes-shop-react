import React from "react";
import { NavLink } from "react-router-dom";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductApi } from "../../redux/productReducer/productReducer";
export default function Home() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductApi());
  }, [dispatch]);
  return (
    <div className="home-component">
      <div className="carousel-home">
        <CarouselHome className="slider" />
      </div>
      <div className="product-feature">
        <h3>Product Feature</h3>
        <div className="container">
          <div className="product-list">
            <div className="row-product">
              {arrProduct.map((p, index) => {
                return (
                  <div className="product-item" key={index}>
                    <div className="cart-info">
                      <div className="img">
                        <img src={p.image} alt="..." />
                      </div>
                      <div className="name-des">
                        <p className="name">{p.name}</p>
                        <p className="des">{p.description}</p>
                      </div>
                    </div>
                    <div className="buy-cost">
                      <NavLink className="btn-buy" to={`/detail/${p.id}`}>
                        Buy now
                      </NavLink>
                      <div className="cost">
                        <span>{p.price}$</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

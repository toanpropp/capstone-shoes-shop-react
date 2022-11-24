import React from "react";
import { NavLink } from "react-router-dom";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductApi } from "../../redux/productReducer/productReducer";
export default function Home_Mobile() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductApi());
  }, [dispatch]);
  return (
    <div className="home-component-m">
      <div className="carousel-home">
        <CarouselHome className="slider" />
      </div>
      <div className="product-feature-m">
        <h3>Product Feature</h3>
        <div className="container">
          <div className="product-list-m">
            <div className="row-product-m">
              {arrProduct.map((p, index) => {
                return (
                  <div className="product-item-m" key={index}>
                    <div className="img-m">
                      {" "}
                      <img src={p.image} alt="..." />
                    </div>
                    <div className="cart-info-m">
                      <div className="name-des-m">
                        <p className="name-m">{p.name}</p>
                        <p className="des-m">
                          {p.description.length > 75
                            ? p.description.substr(0, 75) + ""
                            : p.description}
                        </p>
                        <span className="cost-m">{p.price}$</span>
                      </div>
                      <NavLink className="view-detail-m" to={`/detail/${p.id}`}>
                        View Detail
                      </NavLink>
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

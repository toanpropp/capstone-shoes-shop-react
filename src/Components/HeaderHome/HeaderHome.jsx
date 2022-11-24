import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { ACCESSTOKEN, settings, USER_LOGIN } from "../../util/config";
import { useSelector } from "react-redux";
export default function HeaderHome() {
  const { listShoes } = useSelector((state) => state.cartReducer);
  const { userProfile } = useSelector((state) => state.userReducer);
  const renderLogin = () => {
    console.log(userProfile);
    if (userProfile.name) {
      return (
        <div className="d-flex">
          <NavLink className="nav-link" to="/profile">
            {userProfile.name}
          </NavLink>
          <button
            className="nav-link btn btn-primary"
            style={{ background: "#fff", border: "none", marginLeft: "20px" }}
            onClick={() => {
              settings.eraseCookie(ACCESSTOKEN, 0);
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(ACCESSTOKEN);
              window.location.href = "/login";
            }}
          >
            Đăng xuất
          </button>
        </div>
      );
    }
    return (
      <div className="d-flex">
        <NavLink className="nav-link" style={{ marginRight: 20 }} to="/login">
          Login
        </NavLink>
        <NavLink to="/register">Register </NavLink>
      </div>
    );
  };
  return (
    <header className="header">
      <div className="top">
        <div className="container">
          <NavLink className="logo" to="">
            <img src="./img/logo.png" alt="" />
          </NavLink>
          <div className="cart">
            <div className="search">
              <span>
                {" "}
                <NavLink to="/search">
                  <SearchOutlined />
                  Search
                </NavLink>
              </span>
            </div>
            <div className="cart-shop">
              <span className="cart-shop">
                <NavLink to="/cart">
                  <ShoppingCartOutlined />
                  {listShoes ? `(${listShoes.length})` : {}}
                </NavLink>
              </span>
            </div>
            <div className="login">{renderLogin()}</div>
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="">Men</NavLink>
          <NavLink to="">Woman</NavLink>
          <NavLink to="">Kid</NavLink>
          <NavLink to="">Sport</NavLink>
        </div>
      </div>
    </header>
  );
}

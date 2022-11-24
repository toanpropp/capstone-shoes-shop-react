import React from "react";
import { NavLink } from "react-router-dom";
export default function FooterHome() {
  return (
    <footer className="footer">
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="top-item">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="">Nike</NavLink>
                </li>
                <li>
                  <NavLink to="">Adidas</NavLink>
                </li>
                <li>
                  <NavLink to="">Contact+</NavLink>
                </li>
              </ul>
            </div>
            <div className="top-item">
              <h4>Support</h4>
              <ul>
                <li>
                  <NavLink to="">About</NavLink>
                </li>
                <li>
                  <NavLink to="">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="">Help</NavLink>
                </li>
                <li>
                  <NavLink to="">Phone</NavLink>
                </li>
              </ul>
            </div>
            <div className="item-register">
              <h4>Register</h4>
              <ul>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <h4 className="text-center coppy-right">
            ©2022 CyberSoft All Rights Reserved | Design Theme By Trương Tấn Khải
          </h4>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.scss";
// import "antd/dist/antd.min.css";
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes, } from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "./redux/configStore";
import HomeTemplate from "./Template/HomeTemplate/HomeTemplate";
import Home from "./Pages/Home/Home";
import Home_Mobile from "./Pages/Home/Home_Mobile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Search from "./Pages/Search/Search";
import Profile from "./Pages/Profile/Profile";
import Detail from "./Pages/Detail/Detail";
import Detail_Mobile from "./Pages/Detail/Detail_Mobile";
import Cart from "./Pages/Cart/Cart";
import Cart_Mobile from "./Pages/Cart/Cart_Mobile";
import UserTemplate from "./Template/UserTemplate/UserTemplate";
import ResponsiveItem from "./ResponsiveItem/ResponsiveItem";
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route
            index
            element={
              <ResponsiveItem component={Home} mobileComponent={Home_Mobile} />
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="cart"
            element={
              <ResponsiveItem component={Cart} mobileComponent={Cart_Mobile} />
            }
          />
          <Route path="detail">
            <Route
              path=":id"
              element={
                <ResponsiveItem
                  component={Detail}
                  mobileComponent={Detail_Mobile}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="" />} />
        </Route>
        <Route path="user" element={<UserTemplate />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

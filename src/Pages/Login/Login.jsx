import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import LoginFacebook from "../../Components/LoginFacebook/LoginFacebook";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginApi } from "../../redux/productReducer/userReducer";
export default function Login() {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Email is not valid!"),
      password: yup
        .string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
          "Password is not valid!"
        ),
    }),
    onSubmit: (values) => dispatch(loginApi(values)),
  });
  return (
    <div className="login-form">
      <div className="container">
        <h3 className="title-login">Login</h3>
        <hr />
        <div className="login">
          <form className="form" onSubmit={form.handleSubmit}>
            <div className="form-group">
              <p>Email</p>
              <input
                type="email"
                id="email"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="email"
              />
              {form.errors.email ? (
                <p className="text text-danger">{form.errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <p>PassWord</p>
              <input
                type="password"
                id="password"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="password"
              />
              {form.errors.password ? (
                <p className="text text-danger">{form.errors.password}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <div className="register-login">
                <NavLink to="/register" className="register">
                  Register Now ?
                </NavLink>
                <button className="btn-login" type="submit">
                  Login
                </button>
              </div>
              <LoginFacebook />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

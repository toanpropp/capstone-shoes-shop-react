import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { getProfileApi } from "../../redux/productReducer/userReducer";
import { getProfileUpdateApi } from "../../redux/productReducer/userReducer";
import { NavLink } from "react-router-dom";
export default function Profile() {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: "",
      gender: "",
      name: "",
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
      phone: yup
        .string()
        .required("Please Enter your phone")
        .matches(
          /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/,
          "Phone is not valid!"
        ),
      gender: yup.boolean().required('please select a gender'),
    }),
    // validationSchema: yup.object().shape({
    //   email: yup.string().required('Vui lòng nhập vào email !').email('Email không đúng định dạng !'),
    //   phone: yup.number().required('Vui lòng nhập vào phone !').typeError('Phone phải là số !'),
    //   name: yup.string().required('Vui lòng nhập vào name !'),
    //   password: yup.string().required('Vui lòng nhập vào password !').min(6, 'Password từ 6 - 20 ký tự !').max(20, 'Password từ 6 - 20 ký tự !'),
    //   gender: yup.boolean().required('Vui lòng chọn gender !'),
    // }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log(values);
      const action = getProfileUpdateApi(values);
      dispatch(action);
    },
    // onSubmit: (values) => {
    //   dispatch(getProfileApi(values));
    // },
  });
  const { userProfile } = useSelector((state) => state.userReducer);

  return (
    <div className="profile-form">
      <h3 className="profile-title">Profile</h3>
      <form action="" className="container" onSubmit={form.handleSubmit}>
        <div className="row">
          <div className="img">
            <img
              src={
                userProfile.picture?.data.url
                  ? userProfile.content?.avatar
                  : "Avatar"
              }
              style={{ width: 100 }}
              className="w-100"
              alt="..."
            />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p className="form-label">Email</p>
                  <input
                    className="form-control"
                    name={"email"}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={userProfile.email}
                  />
                  {form.errors.email ? (
                    <p className="text text-danger">{form.errors.email}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <p className="form-label"> Name</p>
                  <input
                    className="form-control"
                    name={"name"}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={userProfile?.content?.name}
                  />
                  {form.errors.name ? (
                    <p className="text text-danger">{form.errors.name}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p className="form-label">Password</p>
                  <input
                    className="form-control"
                    name={"password"}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={userProfile?.content?.password}
                  />
                  {form.errors.password ? (
                    <p className="text text-danger">{form.errors.password}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <p className="form-label">Phone</p>
                  <input
                    className="form-control"
                    name={"phone"}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={userProfile?.content?.phone}
                  />
                  {form.errors.phone ? (
                    <p className="text text-danger">{form.errors.phone}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="form-group">
              <p className="form-label">Gender</p>
              <label htmlFor="male">Male</label>
              <input
                className="mx-2"
                type="radio"
                id="male"
                name="gender"
                value={true}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <label htmlFor="female">Female</label>
              <input
                className="mx-2"
                type="radio"
                id="female"
                name="gender"
                value={false}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.errors.gender ? (
                <p className="text text-danger">{form.errors.gender}</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div
          className="button text-right mt-2"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div className="btn btn-success">Update</div>
        </div>
        <span className="history">Order History</span>
        <span className="favorite">Favorite</span>
        <p className="history-order">+ Orders have been placed on </p>
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quanlity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item">
              <NavLink className="page-link" to="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </NavLink>
            </li>
            <li className="page-item">
              <NavLink className="page-link" to="#">
                1
              </NavLink>
            </li>
            <li className="page-item">
              <NavLink className="page-link" to="#">
                2
              </NavLink>
            </li>
            <li className="page-item">
              <NavLink className="page-link" to="#">
                3
              </NavLink>
            </li>
            <li className="page-item">
              <NavLink className="page-link" to="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </form>
    </div>
  );
}

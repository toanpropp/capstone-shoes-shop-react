import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookOutlined } from "@ant-design/icons";
import { loginFacebookApi } from "../../redux/productReducer/userReducer";
import { useDispatch } from "react-redux";
export default function LoginFacebook() {
  const dispatch = useDispatch();
  const responseFacebook = (response) => dispatch(loginFacebookApi(response));
  return (
    <div className="w-100 login-facebook">
      <FacebookLogin
        appId="513423747312714"
        className="w-100 content"
        fields="name,email,picture"
        callback={responseFacebook}
        render={(props) => (
          <button className="btn-facebook btn btn-primary w-100" {...props}>
            <FacebookOutlined />
            Continue with Facebook
          </button>
        )}
      />
    </div>
  );
}

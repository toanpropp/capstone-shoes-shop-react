import { createSlice } from "@reduxjs/toolkit";
import { http, ACCESSTOKEN, settings, USER_LOGIN } from "../../util/config";
import { history } from "../../index";
import { message } from "antd";
const initialState = {
  userLogin: settings.getStorageJson(USER_LOGIN)
    ? settings.getStorage(USER_LOGIN)
    : {},
  userProfile: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    setProfileAction: (state, action) => {
      state.userProfile = action.payload;
    },
    getProfileUpdateAction: (state, action) => {
      state.userProfileUpdate = action.payload;
    },
  },
});

export const { loginAction, setProfileAction,getProfileUpdateAction } = userReducer.actions;

export default userReducer.reducer;
///async action
export const loginApi = (userLogin) => async (dispatch) => {
  const result = await http.post("/api/Users/signin", userLogin);
  message.success(result.data.content);
  dispatch(loginAction(result.data.content));
  dispatch(setProfileAction(result.data.content));
  history.push("/profile");
  // history.push("/proifle");
  // const actionGetProfile = getProfileAction();
  // dispatch(actionGetProfile);
  // settings.setStorage(ACCESSTOKEN, result.data.content.ACCESSTOKEN);
  // settings.setStorageJson(USER_LOGIN, result.data.content);
  // settings.setCookie(ACCESSTOKEN, result.data.content.ACCESSTOKEN, 30);
};
export const getProfileApi = (data) => async (dispatch) => {
  const result = await http.post("/api/users/getprofile",data);
  dispatch(setProfileAction(result.data.content));
};
export const loginFacebookApi = (data) => {
  return async (dispatch) => {
    dispatch(loginAction(data));
    dispatch(setProfileAction(data));
    history.push("/profile");
    // settings.setStorageJson(USER_LOGIN, result.data.content);
    // settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);
    // settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  };
};
export const getProfileUpdateApi = (userProfileUpdate) => {
  return async dispatch => {
    const result = await http.post('/api/Users/updateProfile', userProfileUpdate);
    const action = getProfileUpdateAction(result.data.content);
    dispatch(action);
  }
};

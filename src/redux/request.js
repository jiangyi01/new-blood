import Axios from "axios";
import qs from "qs";
import { message } from "antd";

import { LOGIN_URL } from "../constants/requestURL";
//信息获取请求
export const INFORMATION_REQUEST = "INFORMATION_REQUEST";
//信息获取成功
export const INFORMATION_SUCCESS = "INFORMATION_SUCCESS";
//信息获取失败
export const INFORMATION_FAILURE = "INFORMATION_FAILURE";

//登录请求
export const LOGIN_REQUEST = "LOGIN_REQUEST";
//登录成功
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
//登录失败
export const LOGIN_FAILURE = "LOGIN_FAILURE";


//问卷获取请求
export const QUESTION_REQUEST = "QUESTION_REQUEST";
//问卷获取成功
export const QUESTION_SUCCESS = "QUESTION_SUCCESS";
//问卷获取失败
export const QUESTION_FAILURE = "QUESTION_FAILURE";

//登录请求
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const informationRequest = () => ({
  type: INFORMATION_REQUEST,
});
export const informationSuccess = (data) => ({
  type: INFORMATION_SUCCESS,
  payload: data,
});
export const informationFailure = (error) => ({
  type: INFORMATION_FAILURE,
  payload: error,
});

export const login = (userID, password) => (dispatch) => {
  dispatch(loginRequest());
  
  return Axios.post(LOGIN_URL, qs.stringify({ username: userID, password: password }))
    .then((res) => res.data)
    .then((res) => {
      
      if (res.errorCode === 200) {
        //登录成功
        console.log(res)
        //将请求得到的data加入请求头中
        //Axios.defaults.headers.common["token"] = res.data.token;
        //把token和refresh_token存进本地
        
        //dispatch(loginSuccess(res));
        message.success("登录成功");
      } else {
        //返回了不成功的状态码，登陆失败
        //dispatch(loginFailure(res.errorMsg));
        console.log(res)
        message.warn(res.errorMsg);
      }
    })
    .catch((err) => {
      dispatch(loginFailure(err));
      message.error("登陆失败，网络错误");
    });
};

export const login_test = (userID, password) => (dispatch) => {
  dispatch(loginRequest());
  dispatch(
    loginSuccess({
      success: true,
      errorCode: 200,
      errorMsg: "成功",
      data: {
        id: 1,
        token: "5ed415g7yh2c8wd465we6f5wed9",
        username: userID,
        role: "user",
      },
    })
  );
};

//获取用户信息请求
export const information = (username, password) => (dispatch) => {
  dispatch(informationRequest());
  return Axios.post(LOGIN_URL, qs.stringify({ username: username }))
    .then((res) => res.data)
    .then((res) => {
      if (res.errorCode === 200) {
        dispatch(informationSuccess(res));
        message.success("获取信息成功");
      } else {
        //返回了不成功的状态码，登陆失败
        dispatch(informationFailure(res.errorMsg));
        message.warn(res.message);
      }
    })
    .catch((err) => {
      dispatch(informationFailure(err));
      message.error("获取信息失败");
    });
};

export const information_test = (userID, password) => (dispatch) => {
  dispatch(informationRequest());
  dispatch(
    informationSuccess({
      success: true,
      errorCode: 200,
      errorMsg: "成功",
      data: {
        area: "软件园校区",
        name: "蒋一",
        college: "软件学院",
        major: "",
        depart1: "",
        group1: "",
        number1: 99,
        depart2: "",
        group2: "",
        number2: 99,
      },
    })
  );
};


export const register = (username, password) => (dispatch) => {
  dispatch(informationRequest());
  return Axios.post(LOGIN_URL, qs.stringify({ username: username }))
    .then((res) => res.data)
    .then((res) => {
      if (res.errorCode === 200) {
        dispatch(informationSuccess(res));
        message.success("获取信息成功");
      } else {
        //返回了不成功的状态码，登陆失败
        dispatch(informationFailure(res.errorMsg));
        message.warn(res.message);
      }
    })
    .catch((err) => {
      dispatch(informationFailure(err));
      message.error("获取信息失败");
    });
};

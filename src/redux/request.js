import Axios from "axios";
import qs from "qs";
import { message } from "antd";

import {
  LOGIN_URL,
  GET_USER_INFO_URL,
  GET_QUESTION_SCROLL_URL,
  REGISTER_URL,
  CHANGE_URL,
  GET_QUESTIONNAIRE_URL,
  SUBMIT_QUESTIONNAIRE_URL,
} from "../constants/requestURL";
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

//报名范围请求
export const GROUPS_REQUEST = "GROUPS_REQUEST";
//报名范围成功
export const GROUPS_SUCCESS = "GROUPS_SUCCESS";
//报名范围失败
export const GROUPS_FAILURE = "GROUPS_FAILURE";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const STATUS_GET_INFORMATION_AVAIL="STATUS_GET_INFORMATION_AVAIL";
export const STATUS_GET_INFORMATION_UNAVA="STATUS_GET_INFORMATION_UNAVA";

export const statusGetInfoAvail=()=>({
  type:STATUS_GET_INFORMATION_AVAIL
})
export const statusGetInfoUnAva=()=>({
  type:STATUS_GET_INFORMATION_UNAVA
})
export const groupsRequest = () => ({
  type: GROUPS_REQUEST,
});
export const groupsSuccess = (data) => ({
  type: GROUPS_SUCCESS,
  payload: data,
});
export const groupsFailure = (error) => ({
  type: GROUPS_FAILURE,
  payload: error,
});

export const questionRequest = () => ({
  type: QUESTION_REQUEST,
});
export const questionSuccess = (data) => ({
  type: QUESTION_SUCCESS,
  payload: data,
});
export const questionFailure = (error) => ({
  type: QUESTION_FAILURE,
  payload: error,
});

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

  return Axios.post(
    LOGIN_URL,
    qs.stringify({ username: userID, password: password })
  )
    .then((res) => res.data)
    .then((res) => {
      if (res.errorCode === 200) {
        //登录成功
        console.log(res);
        //将请求得到的data加入请求头中
        Axios.defaults.headers.common["token"] = res.data.token;
        //把token和refresh_token存进本地

        dispatch(loginSuccess(res));
        message.success("登录成功");
      } else {
        //返回了不成功的状态码，登陆失败
        //dispatch(loginFailure(res.errorMsg));
        console.log(res);
        message.warn(res.errorMsg);
      }
    })
    .catch((err) => {
      dispatch(loginFailure(err));
      message.error("登陆失败，网络错误");
    });
};

//获取用户信息请求
export const information = () => (dispatch) => {
  Axios.defaults.headers.common["token"] = JSON.parse(
    localStorage.getItem("loginState")
  ).data.token;

  dispatch(informationRequest());
  return Axios.post(GET_USER_INFO_URL)
    .then((res) => res.data)
    .then((res) => {
      if (res.errorCode === 200) {
        dispatch(informationSuccess(res));
        message.success("获取信息成功");
      } else {
        //返回了不成功的状态码，登陆失败
        dispatch(informationFailure(res.errorMsg));
        console.log(res);
        message.warn(res.message);
      }
    })
    .catch((err) => {
      dispatch(informationFailure(err));
      message.error("获取信息失败");
    });
};

export const get_Groups_info = () => (dispatch) => {
  Axios.defaults.headers.common["token"] = JSON.parse(
    localStorage.getItem("loginState")
  ).data.token;
  dispatch(groupsRequest());
  return Axios.post(GET_QUESTION_SCROLL_URL)
    .then((res) => res.data)
    .then((res) => {
      if (res.errorCode === 200) {
        dispatch(groupsSuccess(res));
        message.success("获取信息成功");
        console.log(res);
      } else {
        //返回了不成功的状态码，登陆失败
        dispatch(groupsFailure(res.errorMsg));
        console.log(res);
        message.warn(res.errorMsg);
      }
    })
    .catch((err) => {
      dispatch(groupsFailure(err));
      message.error("获取信息失败");
    });
};

export const register = (data) => {
  Axios.defaults.headers.common["token"] = JSON.parse(
    localStorage.getItem("loginState")
  ).data.token;
  return Axios.post(
    REGISTER_URL,
    qs.stringify({
      phone: data.phone,
      qq: data.qq,
      introduce: data.introduction,
      depart1: data.depart1,
      group1: data.group1,
      depart2: data.depart2,
      group2: data.group2,
    })
  )
    .then((res) => res.data)
    .then((res) => {
      if (res.errorCode === 200) {
        return new Promise((resolve, reject) => {
          resolve(REGISTER_SUCCESS);
        });
      } else {
        console.log(res);
        //返回了不成功的状态码，登陆失败
        message.warn(res.errorMsg);
        return new Promise((resolve, reject) => {
          resolve(REGISTER_FAILURE);
        });
      }
    })
    .catch((err) => {
      message.error("好像没成功，就很秃然的");
      return new Promise((resolve, reject) => {
        resolve(REGISTER_FAILURE);
      });
    });
};

export const changeRegister = (data) => {
  Axios.defaults.headers.common["token"] = JSON.parse(
    localStorage.getItem("loginState")
  ).data.token;

  return Axios.post(
    CHANGE_URL,
    qs.stringify({
      phone: data.phone,
      qq: data.qq,
      introduce: data.introduction,
      depart1: data.depart1,
      group1: data.group1,
      depart2: data.depart2,
      group2: data.group2,
    })
  )
    .then((res) => res.data)
    .then((res) => {
      if (res.errorCode === 200) {
        return new Promise((resolve, reject) => {
          resolve(REGISTER_SUCCESS);
        });
      } else {
        //返回了不成功的状态码，登陆失败
        message.warn(res.errorMsg);
        return new Promise((resolve, reject) => {
          resolve(REGISTER_FAILURE);
        });
      }
    })
    .catch((err) => {
      message.error("获取信息失败");
      return new Promise((resolve, reject) => {
        resolve(REGISTER_FAILURE);
      });
    });
};
export const get_Questionair_info = (data) => (dispatch) => {
  Axios.defaults.headers.common["token"] = JSON.parse(
    localStorage.getItem("loginState")
  ).data.token;
  dispatch(questionRequest());
  return Axios.post(
    GET_QUESTIONNAIRE_URL,
    qs.stringify({
      depart1: data.depart1,
      group1: data.group1,
      depart2: data.depart2,
      group2: data.group2,
    })
  )
    .then((res) => res.data)
    .then((res) => {
      if (res.errorCode === 200) {
        dispatch(questionSuccess(res));
        message.success("获取信息成功");
        console.log(res);
      } else {
        //返回了不成功的状态码，登陆失败
        dispatch(questionFailure(res.errorMsg));
        console.log(res);
        message.warn(res.errorMsg);
      }
    })
    .catch((err) => {
      dispatch(questionFailure(err));
      message.error("获取信息失败");
    });
};
export const ANSWERS_SUCCESS = "ANSWERS_SUCCESS";
export const ANSWERS_FAILURE = "ANSWERS_FAILURE";

export const submit_question = (answers,num) => {
  Axios.defaults.headers.common["token"] = JSON.parse(
    localStorage.getItem("loginState")
  ).data.token;
  console.log(Axios.defaults.headers.common["token"]);
  console.log({
    answers:answers,
    num:num
  })
  return Axios.post(
    SUBMIT_QUESTIONNAIRE_URL,
    qs.stringify({
      answers:answers,
      num:num
    }
    )
  )
    .then((res) => res.data)
    .then((res) => {
      if (res.errorCode === 200) {
        message.success("获取信息成功");

        console.log(res);
        return new Promise((resolve, reject) => {
          resolve(ANSWERS_SUCCESS);
        });
      } else {
        //返回了不成功的状态码，登陆失败

        console.log(res);
        message.warn(res.errorMsg);
        return new Promise((resolve, reject) => {
          resolve(ANSWERS_FAILURE);
        });
      }
    })
    .catch((err) => {
      message.error("获取信息失败");
      return new Promise((resolve, reject) => {
        resolve(ANSWERS_FAILURE);
      });
    });
};

export const runAway=()=>{
  console.log("退出")
}
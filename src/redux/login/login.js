import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../request";
import userStatus from "../../constants/login";
const defaultState = JSON.parse(localStorage.getItem("loginState")) || {
  isLogin: userStatus.NOT_LOGGED_IN,
  data: {
    id: 0,
    token: "",
    username: "",
    role: "",
  },
  success: false,
  errorCode: 200,
  errorMsg: "",
};
export default function Login(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLogin: userStatus.LOGGING_IN,
      };
    case LOGIN_SUCCESS:
      //登陆成功后储存状态至本地
      localStorage.setItem(
        "loginState",
        JSON.stringify({
          ...state,
          data: { ...action.payload.data },
          isLogin: userStatus.LOGIN_SUCCESS,
          success: action.payload.success,
          errorCode: action.payload.errorCode,
          errorMsg: action.payload.errorMsg,
        })
      );
      console.log(action);
      return {
        ...state,
          data: { ...action.payload.data },
          isLogin: userStatus.LOGIN_SUCCESS,
          success: action.payload.success,
          errorCode: action.payload.errorCode,
          errorMsg: action.payload.errorMsg,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLogin: userStatus.LOGIN_FAILD,
        success: action.payload.success,
        errorCode: action.payload.errorCode,
        errorMsg: action.payload.errorMsg,
      };

    default:
      return state;
  }
}

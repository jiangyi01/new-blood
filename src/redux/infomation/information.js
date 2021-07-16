import {
  INFORMATION_REQUEST,
  INFORMATION_SUCCESS,
  INFORMATION_FAILURE,
} from "../request";
const defaultState = JSON.parse(localStorage.getItem("informationState")) || {
  data: {
    area: "",
    name: "",
    major: "",
    depart1: "",
    group1: "",
    number1: 99,
    depart2: "",
    group2: "",
    number2: 99,
    college: "",
      
  },
  success: false,
  errorCode: 200,
  errorMsg: "",
};
export default function Information(state = defaultState, action) {
  switch (action.type) {
    case INFORMATION_REQUEST:
      return {
        ...state,
      };
    case INFORMATION_SUCCESS:
      //登陆成功后储存状态至本地
      localStorage.setItem(
        "informationState",
        JSON.stringify({
          ...state,
          data: { ...action.payload.data },

          success: action.payload.success,
          errorCode: action.payload.errorCode,
          errorMsg: action.payload.errorMsg,
        })
      );
      return {
        ...state,
        data: { ...action.payload.data },

        success: action.payload.success,
        errorCode: action.payload.errorCode,
        errorMsg: action.payload.errorMsg,
      };
    case INFORMATION_FAILURE:
      return {
        ...state,

        success: action.payload.success,
        errorCode: action.payload.errorCode,
        errorMsg: action.payload.errorMsg,
      };

    default:
      return state;
  }
}

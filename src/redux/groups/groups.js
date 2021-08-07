import {
    GROUPS_SUCCESS,
    GROUPS_REQUEST,
    GROUPS_FAILURE,
  } from "../request";
  const defaultState={
    data: {
        questionnaire:[]
    },
    success: false,
    errorCode: 200,
    errorMsg: "",
  };
  export default function Groups(state = defaultState, action) {
    switch (action.type) {
      case GROUPS_REQUEST:
        return {
          ...state,
        };
      case GROUPS_SUCCESS:
        return {
          ...state,
          data: { ...action.payload.data },
          success: action.payload.success,
          errorCode: action.payload.errorCode,
          errorMsg: action.payload.errorMsg,
        };
      case GROUPS_FAILURE:
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
  
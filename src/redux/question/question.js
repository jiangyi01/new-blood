import {
    QUESTION_REQUEST,
    QUESTION_SUCCESS,
    QUESTION_FAILURE,
  } from "../request";
  const defaultState={
    data: {
        questionnaire:[]
    },
    success: false,
    errorCode: 200,
    errorMsg: "",
  };
  export default function Question(state = defaultState, action) {
    switch (action.type) {
      case QUESTION_REQUEST:
        return {
          ...state,
        };
      case QUESTION_SUCCESS:
        return {
          ...state,
          data: { ...action.payload.data },
  
          success: action.payload.success,
          errorCode: action.payload.errorCode,
          errorMsg: action.payload.errorMsg,
        };
      case QUESTION_FAILURE:
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
  
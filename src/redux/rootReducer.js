import { combineReducers } from "redux";
import Login from './login/login'
import  Information from './infomation/information'
import Question from "./question/question";
export default combineReducers({
  Login,Information,Question
});
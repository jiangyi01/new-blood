import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home/home";
import { Provider } from "react-redux";
import store from "./redux/configStore";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Question from "./pages/questionnaire/question";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import "antd/dist/antd.css";
import Information from "./pages/home/information/information";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/question" component={Question} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />{" "}
          <Route exact path="/information" component={Information} />
        
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

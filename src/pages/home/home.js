import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import userStatus from "../../constants/login";
import "./home.css";
import Introduce from "./introduce/introduce";

import { Button } from "antd";
import Information from "./information/information";
import introduce from '../../constants/img/introduce.png'
import information from '../../constants/img/mesage.png'
class Home_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: 0,
    };
  }

  componentDidMount() {
    console.log(this.props);
  }
  changeHomeWindow_Info = (type) => {
    this.setState({
      chosen: 1,
    });
  };
  changeHomeWindow_Intr = (type) => {
    this.setState({
      chosen: 0,
    });
  };
  render() {
    return (
      <div className="bodyHome">
        {this.state.chosen === 0 ? (
          <Introduce history={this.props.history} />
        ) : (
          <Information history={this.props.history} />
        )}
        <div id="footer">
          <Button onClick={this.changeHomeWindow_Intr} id="footerButtonIntr">
            <div><img src={introduce} className="changeHomeWindow-img"></img></div>介绍
          </Button>


          <Button onClick={this.changeHomeWindow_Info} id="footerButtonInfo">
            <div><img src={information} className="changeHomeWindow-img"></img></div>个人主页
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.Login,
    information: state.Information,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    test: () => {
      console.log(ownProps);
    },
  };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(Home_page);

export default Home;

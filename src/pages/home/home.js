
import { connect } from "react-redux";
import React, { Component } from "react";

import "./home.css";
import Introduce from "./introduce/introduce";
import { information, statusGetInfoAvail, statusGetInfoUnAva } from "../../redux/request";
import { Button } from "antd";
import Information from "./information/information";
import introduce from '../../constants/img/introduce.png'
import informationPic from '../../constants/img/mesage.png'

let ctime;

const timed = (props)=>{
  ctime=setInterval(() => {
 
  if (props.login.isLogin === 2){
      props.TimerRequest();
       console.log("请求一遍");
  }

  if(!props.status.get_info_isAvail){
    clearInterval(ctime)
  }
}, 5000);}

class Home_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: 0,
    };
  }

  componentDidMount() {
    console.log(this.props);
    //ctime=timed(this.props)
    timed(this.props)
  }

  cutTimer=()=>{
    this.props.cutTimer().then(()=>{
      console.log("qwqwqwq")
      if(!this.props.status.get_info_isAvail){
        clearInterval(ctime)
      }
    });
  }


  changeHomeWindow_Info = (type) => {
    this.setState({
      chosen: 1,
    });
    this.props.startTimer().then(()=>{
    timed(this.props)
    });
  };
  changeHomeWindow_Intr = (type) => {
    this.setState({
      chosen: 0,
    });
    this.cutTimer();
  };
  render() {
    return (
      <div className="bodyHome">
        {this.state.chosen === 0 ? (
          <Introduce history={this.props.history}  />
        ) : (
          <Information history={this.props.history} ctime={ctime}/>
        )}
        <div id="footer">
          <Button onClick={this.changeHomeWindow_Intr} id="footerButtonIntr">
            <div><img src={introduce} className="changeHomeWindow-img"></img></div>介绍
          </Button>


          <Button onClick={this.changeHomeWindow_Info} id="footerButtonInfo">
            <div><img src={informationPic} className="changeHomeWindow-img"></img></div>个人主页
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
    status:state.Status,

  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    test: () => {
      console.log(ownProps);
    },
    TimerRequest: () => {
      dispatch(information());
    },
    cutTimer:()=>{
      dispatch(statusGetInfoUnAva());
      return new Promise((res,rej)=>{
        res("changeStatus")
      })
    },
    startTimer:()=>{
      dispatch(statusGetInfoAvail());
      return new Promise((res,rej)=>{
        res("changeStatus");
      })
    }
  };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(Home_page);

export default Home;


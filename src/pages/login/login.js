
import { connect } from "react-redux";
import React, { Component } from "react";
import { login,login_test } from "../../redux/request";
import { Button, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
class Login_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      buttonFalse: false,
    };
  }

  componentDidMount() {
    console.log(this.props);
    //这里以后会改成调用存储的账号和密码来进行自动登录
    if (this.props.login.isLogin === 0) {
      message.info("请登录");
    } else if (this.props.login.isLogin === 2) {
      this.props.history.push("/information");
    }
  }
  changeUsername = ({ target: { value } }) => {
    this.setState({
      username: value,
      buttonFalse: false,
    });
    console.log(value);
  };
  changePassword = ({ target: { value } }) => {
    this.setState({
      password: value,
      buttonFalse: false,
    });
    console.log(value);
  };
  // 未登录
  //const NOT_LOGGED_IN = 0;
  // 登录中
  //const LOGGING_IN = 1;
  // 已登录，并且成功
  //const LOGIN_SUCCESS = 2;
  //失败
  //const LOGIN_FAILD = 3;

  loginCh = async () => {
    switch (this.props.login.isLogin) {
      case 2:
        this.props.history.push("/");
        break;
        case 3:
         message.error("登陆失败")
          break;
      default:
        break;
    }
  };
  loginCheck = async () => {
    await this.props.loginRequest(this.state.username, this.state.password);
    await this.loginCh();
  };
  render() {
    return (
      <div id="loginBody">
        <div id="loginPanel">
          <div id="loginLogo"></div>
          <div id="loginInput">
            <Input
              className="inputBar"
              size="large"
              placeholder="请输入您的账号"
              prefix={<UserOutlined />}
              onChange={this.changeUsername}
            />
            <br />
            <Input.Password
              className="inputBar"
              size="large"
              placeholder="请输入您的密码"
              prefix={<LockOutlined />}
              onChange={this.changePassword}
            />
            <br />
          </div>
          <div id="loginButton">
            <Button
              id="loginButtonItem"
              ghost={this.state.buttonFalse}
              onClick={this.loginCheck}
            >
              {this.state.buttonFalse ? (
                <div style={{ color: "red" }}>输入有误</div>
              ) : (
                "登 录"
              )}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.Login,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginRequest: async (username, password) => {
      if(username!==""&&password!==""){
        return dispatch(login(username, password));
      }else {
        message.info("请填写完整");
        return new Promise(()=>{return "成功"},()=>{return "失败"})
      }
      
    },
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(Login_page);

export default Login;


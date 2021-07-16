import React, { Component } from "react";
import { Button, Modal } from "antd";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./textIntro.css";
import logo from "../../../../constants/img/logo.png";
class TextIntro_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifLogin: true,
      visible_unlogin: false,
    };
  }

  detectIfLogin() {
    if (this.props.login.isLogin === 0) {
      this.setState({
        ifLogin: false,
        visible_unlogin: true,
      });
    } else if (this.props.login.isLogin === 2) {
      this.setState({
        ifLogin: true,
        visible_unlogin: false,
      });
      if (this.props.information.depart1 !== "") {
        this.props.history.push("/register")
      }
    }
  }
  setIsModalVisible = (value) => {
    this.setState({
      visible_unlogin: value,
    });
  };

  showModal = () => {
    this.setIsModalVisible(true);
  };

  handleOk = () => {
    this.setIsModalVisible(false);
    console.log(this.props.history);
    this.props.history.push("/login");
  };

  handleCancel = () => {
    this.setIsModalVisible(false);
  };

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div id="intro-con">
        <div id="intro-con-logo">
          <img src={logo} id="introLogo"></img>
        </div>
        <div className="intro-con-letter">{this.props.num}</div>
        <div className="intro-btm-footer">
          <div className="intro-btm">
            <Button
              id="intro-rgister-btm"
              onClick={() => {
                this.detectIfLogin();
              }}
            >
              报名按钮
            </Button>
            <Modal
              title="检测到您未登录"
              visible={this.state.visible_unlogin}
              mask={true}
              footer={null}
              bodyStyle={{ padding: "0px", borderRadius: "100px" }}
              closable={false}
            >
              <p id="modelText">小线建议您先去登录哦</p>
              <div id="modelFooter">
                <Button id="modelCancel" onClick={this.handleCancel}>
                  再想想
                </Button>
                <Button id="modelOk" onClick={this.handleOk}>
                  去登陆
                </Button>
              </div>
            </Modal>
          </div>
          <div className="intro-btm">
            <Button onClick={this.props.back} id="intro-back-btm">
              返回按钮
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

const TextIntro = connect(mapStateToProps, mapDispatchToProps)(TextIntro_page);
export default TextIntro;

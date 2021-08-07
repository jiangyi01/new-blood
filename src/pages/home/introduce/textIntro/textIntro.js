import React, { Component } from "react";
import { Button, Modal } from "antd";
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
        this.props.history.push("/change")
      }else{
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


  conBar=(props)=>{
    let con = [];
    props.map((value,index,array)=>{
      let list=[];
      value.con.map((v,i,a)=>{
        list.push(<div key={i+index*10}>{v}</div>)
      })
      con.push(
      <div className="introduceCard" key={index}>
        <div className="introduceCardBack">
           <div className="introduceCardTitle">
          {value.departName}
        </div>
        <div className="introduceCardCon">
          {list}
        </div>
        </div>
       
      </div>)
    })
    con.push(<div className="introduceConblock" key={props.length+1}></div>)
    return con;
  }
  render() {
    return (
      <div id="intro-con">
        <div id="intro-con-logo">
          <img src={logo} id="introLogo"></img>
        </div>
        <div className="intro-con-letter">{this.conBar(this.props.con)}</div>
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

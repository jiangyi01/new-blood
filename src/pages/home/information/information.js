import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import "./information.css";
import { UserOutlined } from "@ant-design/icons";
import { information_test } from "../../../redux/request";
const chosenTag = (num, depart, group, positionNum) => {
  return (
    <div className="chosenTagBar">
      <div className="chosenTagBar-num">
        {" "}
        志<br />向<br />
        {num}
      </div>
      <div className="chosenTagBar-con">
        <div className="chosenTagBar-con-depart">
          {depart}
          <div className="chosenTagBar-con-group"></div>
          {group}
        </div>

        <div className="chosenTagBar-con-positionNum">
          <div className="paihao">排号：</div>
          <div className="shuzi">{positionNum}</div>
        </div>
      </div>
    </div>
  );
};

const chosenTagNum = (data) => {
  console.log(data);
  if (data.depart1 !== "" && data.depart2 !== "") {
    return (
      <div>
        {chosenTag(1, data.depart1, data.group1, data.number1)}
        {chosenTag(2, data.depart2, data.group2, data.number2)}
      </div>
    );
  }else if(data.depart1 !== "" && data.depart2 === ""){
    return (
      <div>
        {chosenTag(1, data.depart1, data.group1, data.number1)}
      </div>
    );
  }
  return <div></div>;
};

class Information_page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //this.TimerRequest();
  }
  TimerRequest = () => {
    this.props.TimerRequest();
    console.log(this.props);
    if (this.props.login.isLogin === 2) {
      setTimeout(() => {
        //console.log("请求一遍");
        this.TimerRequest();
      }, 10000);
    }
  };
  gotoLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <div id="informationBackground">
          <div id="informationPanel">
            {this.props.login.isLogin === 2 ? (
              <div className="informationPanelTag">
                <div id="informationPanelHeadTag">
                  <div className="informationHeadTag">{this.props.information.data.name}</div>
                  <div className="informationHeadTag">{this.props.information.data.area}</div>
                  <div className="informationHeadTag">{this.props.login.data.username}</div>
                </div>
                <div id="informationHeadImg">

                </div>
              </div>
            ) : (
              <div className="informationPanelTag">
                <div id="informationTagIcon">
                  <UserOutlined style={{ fontSize: "45px", color: "gray" }} />
                </div>
                <div id="informationTagBar">
                  <div className="informationTag">姓名</div>
                  <div className="informationTag">学号</div>
                  <div className="informationTag">校区</div>
                </div>
              </div>
            )}
          </div>
          <div id="informationCon">
            {this.props.login.isLogin === 2 ? (
              <div>
                <div>学院：{this.props.information.data.college}</div>
                <div>专业：{this.props.information.data.major}</div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div id="choiceTags">{chosenTagNum(this.props.information.data)}</div>
          <div id="informationChooseButton">
            {this.props.login.isLogin === 2 ? (
              <div>
                <div className="informationButton">
                  <div className="informationButtonUpletter">
                    注意：您可在X⽉X⽇X时前修改您的报名意向
                  </div>
                  <Button id="informationButtonRegister">
                    {this.props.information.data.depart1 !== "" &&
                    this.props.login.isLogin === 2
                      ? "修改志向"
                      : "纳新报名"}
                  </Button>
                </div>
                <div className="informationButton">
                  <Button id="informationButtonExit">退出账号</Button>
                </div>
              </div>
            ) : (
              <div className="informationButton">
                <div className="informationButtonUpletter">
                  *您尚未登陆，请登录后进⾏报名{" "}
                </div>
                <Button id="informationButtonSign" onClick={this.gotoLogin}>
                  去 登 录
                </Button>
              </div>
            )}
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
    TimerRequest: () => {
      dispatch(information_test("1", "2"));
    },
  };
};

const Information = connect(
  mapStateToProps,
  mapDispatchToProps
)(Information_page);

export default Information;

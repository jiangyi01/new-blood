import { connect } from "react-redux";
import React, { Component } from "react";
import "./register.css";

import { Input, Button, Cascader } from "antd";
import {
  get_Groups_info,
  get_Questionair_info,
  register,
  REGISTER_SUCCESS,
} from "../../redux/request.js";
const { TextArea } = Input;

class Register_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      college: "",
      major: "",
      phone: "",
      qq: "",
      introduction: "",
      group1: "",
      group2: "",
      depart1: "",
      depart2: "",
      options: [],
    };
  }

  componentDidMount() {
    this.props.getGroups().then(() => {
      let optionCon = [];
      this.props.groups.data.groups.map((value, index, array) => {
        let departs = [];
        value.departs.map((v) => {
          departs.push({
            value: v,
            label: v,
          });
        });
        optionCon.push({
          value: value.groupName,
          label: value.groupName,
          children: departs,
        });
      });
      this.setState({
        options: optionCon,
      });
      console.log(optionCon);
    });
  }

  onChange_college = (e) => {
    this.setState({
      college: e.target.value,
    });
    console.log("Change:", e.target.value);
  };
  onChange_major = (e) => {
    this.setState({
      major: e.target.value,
    });
    console.log("Change:", e.target.value);
  };
  onChange_phone = (e) => {
    this.setState({
      phone: e.target.value,
    });
    console.log("Change:", e.target.value);
  };
  onChange_qq = (e) => {
    this.setState({
      qq: e.target.value,
    });
    console.log("Change:", e.target.value);
  };
  onChange_introduction = (e) => {
    this.setState({
      introduction: e.target.value,
    });
    console.log("Change:", e.target.value);
  };

  onChange_choose_1 = (value) => {
    this.setState({
      group1: value[0],
      depart1: value[1],
    });
    console.log(value);
  };
  onChange_choose_2 = (value) => {
    this.setState({
      group2: value[0],
      depart2: value[1],
    });
    console.log(value);
  };

  render() {
    return (
      <div>
        <div id="register-head">报名表</div>
        <div id="register-position-campus">
          <div id="register-position-con">
            当前所在校区：
            {this.props.information.data.area}
          </div>
          <div id="register-position-alarm">
            <div id="register-position-alarm-con">
              如与真实所在校区不符，请联系i山大客服或线下报名
            </div>
          </div>
          <div id="register-main-information">
            <div id="register-main-information-title">
              <div id="register-main-information-title-con">基本信息</div>
            </div>
            <div id="register-main-input">
              <div className="register-main-information-input">
                <Input
                  prefix="学院："
                  className="register-main-information-input-con"
                  onChange={this.onChange_college}
                />
              </div>
              <div className="register-main-information-input">
                <Input
                  prefix="专业："
                  className="register-main-information-input-con"
                  onChange={this.onChange_major}
                />
              </div>
              <div className="register-main-information-input">
                <Input
                  prefix="电话："
                  className="register-main-information-input-con"
                  onChange={this.onChange_phone}
                />
              </div>
              <div className="register-main-information-input">
                <Input
                  prefix="QQ："
                  className="register-main-information-input-con"
                  onChange={this.onChange_qq}
                />
              </div>
            </div>
          </div>

          <div id="register-self-introduction">
            <div id="register-self-introduction-title">
              <div id="register-self-introduction-title-con">自我介绍</div>
            </div>

            <div id="register-self-introduction-TextArea">
              <TextArea
                showCount
                maxLength={255}
                id="register-self-introduction-TextArea-con"
                onChange={this.onChange_introduction}
              />
            </div>
          </div>

          <div id="register-chooose">
            <div id="register-chooose-title">
              <div id="register-chooose-title-con">报名意向</div>
            </div>

            <div id="register-chooose-cascaders">
              <div className="register-chooose-cascaders-con">
                <div>志愿一 :</div>
                <Cascader
                  className="register-chooose-cascaders-con-cascader"
                  options={this.state.options}
                  onChange={this.onChange_choose_1}
                  placeholder="志愿一"
                />
              </div>

              <div className="register-chooose-cascaders-con">
                <div>志愿二 : </div>
                <Cascader
                  className="register-chooose-cascaders-con-cascader"
                  options={this.state.options}
                  onChange={this.onChange_choose_2}
                  placeholder="志愿二"
                />
              </div>
            </div>
          </div>
          <div id="register-submit">
            <Button
              id="register-submit-con"
              onClick={() => {
                this.props.sunmit(this.state, this.props);
              }}
            >
              提交
            </Button>
            <Button
              id="register-back-con"
              onClick={() => {
                this.props.history.goBack();
              }}
            >
              返回
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
    groups: state.Groups,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sunmit: async (data, props) => {
      console.log(data);
      let result = await register(data);
      if (result === REGISTER_SUCCESS) {
        await dispatch(
          get_Questionair_info({
            depart1: data.depart1,
            group1: data.group1,
            depart2: data.depart2,
            group2: data.group2,
          })
        );
        props.history.push("/question");
      } else {
        await dispatch(
          get_Questionair_info({
            depart1: data.depart1,
            group1: data.group1,
            depart2: data.depart2,
            group2: data.group2,
          })
        );
        props.history.push("/question");
      }
      console.log(result);
    },
    submit_test: (props) => {
      props.history.push("/question");
    },
    getGroups: () => {
      return dispatch(get_Groups_info());
    },
    getQuestion: (data) => {
      console.log("qwq");
      return dispatch(
        get_Questionair_info({
          depart1: data.depart1,
          group1: data.group1,
          depart2: data.depart2,
          group2: data.group2,
        })
      );
    },
  };
};

const Register = connect(mapStateToProps, mapDispatchToProps)(Register_page);

export default Register;

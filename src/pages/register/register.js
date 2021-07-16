<<<<<<< HEAD
import { connect } from "react-redux";
import React, { Component } from "react";
import Axios from "axios";
import "./register.css";
import { REGISTER_URL } from "../../constants/requestURL";
import qs from "qs";
import { Input, Button, Cascader, message } from "antd";
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
    };
  }

  componentDidMount() {
    console.log(this.props);
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

  options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
        },
      ],
    },
  ];

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
                  options={this.options}
                  onChange={this.onChange_choose_1}
                  placeholder="志愿一"
                />
              </div>

              <div className="register-chooose-cascaders-con">
                <div>志愿二 : </div>
                <Cascader
                  className="register-chooose-cascaders-con-cascader"
                  options={this.options}
                  onChange={this.onChange_choose_2}
                  placeholder="志愿二"
                />
              </div>
            </div>
          </div>
          <div id="register-submit">
            <Button id="register-submit-con" onClick={()=>{this.props.submit_test(this.props)}}>提交</Button>
            <Button id="register-back-con" onClick={()=>{this.props.history.goBack();}}>返回</Button>
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
    sunmit: (props) => {
      Axios.post(REGISTER_URL, qs.stringify({ username: "1" }))
        .then((res) => res.data)
        .then((res) => {
          if (res.errorCode === 200) {
            message.success("报名成功，请填写问卷");
            props.history.push("/question");
          } else {
            //返回了不成功的状态码，登陆失败

            message.warn(res.message);
          }
        })
        .catch((err) => {
          message.error("获取信息失败");
        });
    },
    submit_test: (props) => {
      message.success("报名成功，请填写问卷");
      props.history.push("/question");
    },
  };
};

const Register = connect(mapStateToProps, mapDispatchToProps)(Register_page);

export default Register;
=======
import { connect } from "react-redux";
import React, { Component } from "react";
import Axios from "axios";
import "./register.css";
import { REGISTER_URL } from "../../constants/requestURL";
import qs from "qs";
import { Input, Button, Cascader, message } from "antd";
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
    };
  }

  componentDidMount() {
    console.log(this.props);
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

  options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
        },
      ],
    },
  ];

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
                  options={this.options}
                  onChange={this.onChange_choose_1}
                  placeholder="志愿一"
                />
              </div>

              <div className="register-chooose-cascaders-con">
                <div>志愿二 : </div>
                <Cascader
                  className="register-chooose-cascaders-con-cascader"
                  options={this.options}
                  onChange={this.onChange_choose_2}
                  placeholder="志愿二"
                />
              </div>
            </div>
          </div>
          <div id="register-submit">
            <Button id="register-submit-con" onClick={()=>{this.props.submit_test(this.props)}}>提交</Button>
            <Button id="register-back-con" onClick={()=>{this.props.history.goBack();}}>返回</Button>
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
    sunmit: (props) => {
      Axios.post(REGISTER_URL, qs.stringify({ username: "1" }))
        .then((res) => res.data)
        .then((res) => {
          if (res.errorCode === 200) {
            message.success("报名成功，请填写问卷");
            props.history.push("/question");
          } else {
            //返回了不成功的状态码，登陆失败

            message.warn(res.message);
          }
        })
        .catch((err) => {
          message.error("获取信息失败");
        });
    },
    submit_test: (props) => {
      message.success("报名成功，请填写问卷");
      props.history.push("/question");
    },
  };
};

const Register = connect(mapStateToProps, mapDispatchToProps)(Register_page);

export default Register;
>>>>>>> 82b70a80e8268a6b4109ead15b0113108f60d1fa

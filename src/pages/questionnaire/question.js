import { connect } from "react-redux";
import React, { Component } from "react";
import "./question.css";
import Axios from "axios";
import {
  SUBMIT_QUESTIONNAIRE_URL,
  GET_QUESTIONNAIRE_URL,
} from "../../constants/requestURL.js";
import qs from "qs";
import { Checkbox, Row, Col, Radio, Space, Button, Input, message } from "antd";
const { TextArea } = Input;
class Question_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: "",
      17: "",
      18: "",
      19: "",
      20: "",
      21: "",
      num: 21,
      onSubmit: false,
    };
  }
  plainOptions = ["Apple", "Pear", "Orange"];

  //输入选项的格式
  options = [
    { label: "Apple", value: "A" },
    { label: "Pear", value: "B" },
    { label: "Orange", value: "C" },
  ];
  //后端数据传来后，更改成输入选项的格式函数
  toGiveOptionsMata = (data) => {
    let options = [];
    data.forEach((item, index, arr) => {
      options.push({ label: item.option, value: item.option.substring(0, 1) });
    });
    return options;
  };

  //多选响应函数
  onChange_multiChoose = (checkedValues, T_index) => {
    let result = "";
    checkedValues.forEach((item, index, arr) => {
      result += item + " ";
    });
    this.setState({
      [T_index]: result,
    });
    console.log("checked = ", result);
  };

  //单选响应函数
  onChange_single = (e, T_index) => {
    console.log("radio checked", e.target.value);
    this.setState({
      [T_index]: e.target.value,
    });
  };

  //问答题响应函数
  onChange_words = (e, T_index) => {
    this.setState({
      [T_index]: e.target.value,
    });
    console.log("Change:", e.target.value);
  };

  //多选题对应的组件
  multiChoose = (num, con, ques) => {
    let rows = [];
    this.toGiveOptionsMata(con).forEach((item, index, arr) => {
      //此处插入的标签中，必去有一个参数key去标识
      rows.push(
        <Row key={index}>
          <Col span={24}>
            <Checkbox value={item.value}>{item.label}</Checkbox>
          </Col>
        </Row>
      );
    });

    return (
      <div className="question-all-body-each">
        <div className="questionTag">
          <div className="questionNum">{num > 9 ? num : "0" + num}</div>
          <div className="questionBody">
            <div className="questionCon">{ques}</div>
            <div className="questionReq">
              <Checkbox.Group
                defaultValue={[]}
                onChange={(checkedValues) => {
                  this.onChange_multiChoose(checkedValues, num);
                }}
              >
                {rows}
              </Checkbox.Group>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  };

  //单选题对应的组件
  onTypeChoose = (num, con, ques, type) => {
    switch (type) {
      case "multiple": {
        let rows = [];
        this.toGiveOptionsMata(con).forEach((item, index, arr) => {
          //此处插入的标签中，必去有一个参数key去标识
          rows.push(
            <Row key={index}>
              <Col span={24}>
                <Checkbox value={item.value}>{item.label}</Checkbox>
              </Col>
            </Row>
          );
        });

        return (
          <div className="question-all-body-each">
            <div className="questionTag">
              <div className="questionNum">{num > 9 ? num : "0" + num}</div>
              <div className="questionBody">
                <div className="questionCon">{ques}</div>
                <div className="questionReq">
                  <Checkbox.Group
                    defaultValue={[]}
                    onChange={(checkedValues) => {
                      this.onChange_multiChoose(checkedValues, num);
                    }}
                  >
                    {rows}
                  </Checkbox.Group>
                </div>
              </div>
            </div>{" "}
          </div>
        );
      }
      case "subjective": {
        return (
          <div className="question-all-body-each">
            <div className="questionTag">
              <div className="questionNum">{num > 9 ? num : "0" + num}</div>
              <div className="questionBody">
                <div className="questionCon">{ques}</div>
                <div className="questionReq">
                  <TextArea
                    showCount
                    maxLength={255}
                    className="question-wordsInput-TextArea-con"
                    onChange={(e) => {
                      this.onChange_words(e, num);
                    }}
                    size="large"
                  />
                </div>
              </div>
            </div>{" "}
          </div>
        );
      }
      default: {
        let rows = [];
        this.toGiveOptionsMata(con).forEach((item, index, arr) => {
          //此处插入的标签中，必去有一个参数key去标识
          rows.push(
            <Radio value={item.value} key={index}>
              {item.label}
            </Radio>
          );
        });
        return (
          <div className="question-all-body-each">
            <div className="questionTag">
              <div className="questionNum">{num > 9 ? num : "0" + num}</div>
              <div className="questionBody">
                <div className="questionCon">{ques}</div>
                <div className="questionReq">
                  <Radio.Group
                    onChange={(e) => {
                      this.onChange_single(e, num);
                    }}
                    value={this.state[num]}
                  >
                    <Space direction="vertical">{rows}</Space>
                  </Radio.Group>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        );
      }
    }
  };

  //问答题对应的组件

  //开发过程中，如果选题有变动，动态获取，然后进行输入大致的调用如下
  //   <Checkbox.Group
  //   options={this.plainOptions}
  //   defaultValue={[]}
  //   onChange={(checkedValues) => {
  //     this.onChange_multiChoose(checkedValues, 1);
  //   }}
  // />

  //两种动态管理key的写法
  // handleChange(field, e) {
  //   this.setState({
  //     [field]: e.target.value
  //   })
  //   setTimeout(() => {
  //     console.log(this.state)
  //   }, 10)
  // }
  // handleChange(field, e) {
  //   let data = {}
  //   data[field] = e.target.value
  //   this.setState(data)
  //   setTimeout(() => {
  //     console.log(this.state)
  //   }, 10)
  // }

  //options={this.toGiveOptionsMata(con)}
  //
  /*<Checkbox.Group
              options={this.toGiveOptionsMata(con)}
              defaultValue={[]}
              onChange={(checkedValues) => {
                this.onChange_multiChoose(checkedValues, num);
              }}
            ></Checkbox.Group> */

  questionGroup = (data) => {
    let rows = [];
    data.forEach((item, index, arr) => {
      //此处插入的标签中，必去有一个参数key去标识
      rows.push(
        <div className="question-all-body-each-con" key={index}>
          {this.onTypeChoose(
            item.question_id,
            item.question_option,
            item.question_name,
            item.question_type
          )}
        </div>
      );
    });
    return rows;
  };

  submit = () => {
    let answer = [];
    for (let i = 1; i <= this.state.num; i++) {
      answer.push(this.state[i]);
    }
    this.setState({
      onSubmit: true,
    });
    Axios.post(SUBMIT_QUESTIONNAIRE_URL, qs.stringify({ answers: answer }))
      .then((res) => res.data)
      .then((res) => {
        if (res.errorCode === 200) {
          message.success("提交成功");
        } else {
          //返回了不成功的状态码，提交失败
          this.setState({
            onSubmit: true,
          });
          message.warn(res.message);
        }
      })
      .catch((err) => {
        this.setState({
          onSubmit: true,
        });
        message.error("信息提交失败");
      });
    console.log(answer);
    this.props.history.push("/");
  };
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <div
          id="question-head"
          onClick={() => {
            console.log(this.state);
          }}
        >
          调查问卷
        </div>
        <div className="question-all-body">
          {this.questionGroup(this.props.question.data.questionnaire)}
        </div>
        <div id="question-submit">
          <Button
            id="question-submit-con"
            onClick={this.submit}
            disabled={this.state.onSubmit}
          >
            提交
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.Login,
    question: state.Question,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getQuestion: () => {},
  };
};

const Question = connect(mapStateToProps, mapDispatchToProps)(Question_page);

export default Question;

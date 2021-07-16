<<<<<<< HEAD
import { connect } from "react-redux";
import React, { Component } from "react";
import "./question.css";
import { Checkbox, Row, Col, Radio, Space, Button,Input } from "antd";
const { TextArea } = Input;
class Question_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: "1",
      2: "2",
      3: "这是第三题",
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
  sigleChoose = (num, con, ques) => {
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
  };

  //问答题对应的组件
  wordsInput=(num, con, ques)=>{
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
                onChange={(e)=>{this.onChange_words(e,num)}}
               size="large"
              />
            </div>
          </div>
        </div>{" "}
      </div>
      
    )
  }

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
          <div className="question-all-body-each-con">
            {this.multiChoose(
              1,
              [
                {
                  option: "A.我是A",
                },
                {
                  option: "B.我是B",
                },
                {
                  option: "C.我是C",
                },
                {
                  option: "D.我是D",
                },
              ],
              "这是一个测试用的问题，此测试用来测试多选题选项与问题的相关组件"
            )}
          </div>
          <div className="question-all-body-each-con">
            {this.multiChoose(
              2,
              [
                {
                  option: "A.我是A",
                },
                {
                  option: "B.我是B",
                },
                {
                  option: "C.我是C",
                },
                {
                  option: "D.我是D",
                },
              ],
              "这是一个测试用的问题，此测试用来测试多选题选项与问题的相关组件"
            )}
          </div>
          <div className="question-all-body-each-con">
            {this.sigleChoose(
              3,
              [
                {
                  option: "A.我是A",
                },
                {
                  option: "B.我是B",
                },
                {
                  option: "C.我是C",
                },
                {
                  option: "D.我是D",
                },
              ],
              "这是一个测试用的问题，此测试用来测试多选题选项与问题的相关组件"
            )}
          </div>{" "}
          <div className="question-all-body-each-con">
            {this.sigleChoose(
              4,
              [
                {
                  option: "A.我是A",
                },
                {
                  option: "B.我是B",
                },
                {
                  option: "C.我是C",
                },
                {
                  option: "D.我是D",
                },
              ],
              "这是一个测试用的问题，此测试用来测试多选题选项与问题的相关组件"
            )}
          </div>
          <div className="question-all-body-each-con">
            {this.wordsInput(
              5,
              [
                {
                  option: "A.我是A",
                },
                {
                  option: "B.我是B",
                },
                {
                  option: "C.我是C",
                },
                {
                  option: "D.我是D",
                },
              ],
              "这是一个测试用的问题，此测试用来测试多选题选项与问题的相关组件"
            )}
          </div>
        </div>
        <div id="question-submit">
          <Button id="question-submit-con" onClick={() => {}}>
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
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const Question = connect(mapStateToProps, mapDispatchToProps)(Question_page);

export default Question;
=======
import { connect } from "react-redux";
import React, { Component } from "react";
import "./question.css";
import { Checkbox, Row, Col, Radio, Space, Button,Input } from "antd";
const { TextArea } = Input;
class Question_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: "1",
      2: "2",
      3: "这是第三题",
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
  sigleChoose = (num, con, ques) => {
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
  };

  //问答题对应的组件
  wordsInput=(num, con, ques)=>{
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
                onChange={(e)=>{this.onChange_words(e,num)}}
               size="large"
              />
            </div>
          </div>
        </div>{" "}
      </div>
      
    )
  }

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
          <div className="question-all-body-each-con">
            {this.multiChoose(
              1,
              [
                {
                  option: "A.我是A",
                },
                {
                  option: "B.我是B",
                },
                {
                  option: "C.我是C",
                },
                {
                  option: "D.我是D",
                },
              ],
              "这是一个测试用的问题，此测试用来测试多选题选项与问题的相关组件"
            )}
          </div>
          <div className="question-all-body-each-con">
            {this.multiChoose(
              2,
              [
                {
                  option: "A.我是A",
                },
                {
                  option: "B.我是B",
                },
                {
                  option: "C.我是C",
                },
                {
                  option: "D.我是D",
                },
              ],
              "这是一个测试用的问题，此测试用来测试多选题选项与问题的相关组件"
            )}
          </div>
          <div className="question-all-body-each-con">
            {this.sigleChoose(
              3,
              [
                {
                  option: "A.我是A",
                },
                {
                  option: "B.我是B",
                },
                {
                  option: "C.我是C",
                },
                {
                  option: "D.我是D",
                },
              ],
              "这是一个测试用的问题，此测试用来测试多选题选项与问题的相关组件"
            )}
          </div>{" "}
          <div className="question-all-body-each-con">
            {this.sigleChoose(
              4,
              [
                {
                  option: "A.我是A",
                },
                {
                  option: "B.我是B",
                },
                {
                  option: "C.我是C",
                },
                {
                  option: "D.我是D",
                },
              ],
              "这是一个测试用的问题，此测试用来测试多选题选项与问题的相关组件"
            )}
          </div>
          <div className="question-all-body-each-con">
            {this.wordsInput(
              5,
              [
                {
                  option: "A.我是A",
                },
                {
                  option: "B.我是B",
                },
                {
                  option: "C.我是C",
                },
                {
                  option: "D.我是D",
                },
              ],
              "这是一个测试用的问题，此测试用来测试多选题选项与问题的相关组件"
            )}
          </div>
        </div>
        <div id="question-submit">
          <Button id="question-submit-con" onClick={() => {}}>
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
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const Question = connect(mapStateToProps, mapDispatchToProps)(Question_page);

export default Question;
>>>>>>> 82b70a80e8268a6b4109ead15b0113108f60d1fa

import React, { Component } from "react";
import { Button } from "antd";
import TextIntro from "./textIntro/textIntro";
import "./introduce.css";
import bg from "../../../constants/img/background-introduce.png";
import { introduction } from "../../../constants/text";
class Introduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifTextIntro: 0,
      context: [],
    };
  }
  changeifTextIntro = (con) => {
    this.setState({
      ifTextIntro: 1,
      context: con,
    });
  };
  changeBackIntro = () => {
    this.setState({
      ifTextIntro: 0,
    });
  };
  componentDidMount() {
    this.setState({
      ifTextIntro: 0,
    });
  }

  color = [
    "#E91E63",
    "#6666FF",
    "#26C6DA",
    "#66BB6A",
    "#FFCA28",
    "#FF9966",
    "#9900FF",
    "#66CC00",
    "#00CC33",
    "#0099FF",
    "#FF6699",
  ];
   getRandomNumberByRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start)
}

  groupsBar = (props) => {
    let con = [];
    props.map((value, index, array) => {
      
      if (index % 2 === 1) {
        con.push(
          <div className="intr-campus-group" key={index}>
            <div
              className="intr-campus-group-con"
              onClick={() => {
                this.changeifTextIntro(array[index - 1].depart);
              }}
            >
              <div
                className="intr-campus-group-background"
                style={{ backgroundColor: this.color[this.getRandomNumberByRange(1,11)], filter: "blur(2px)" }}
              ></div>
              <div className="intr-campus-group-conText">
                {array[index - 1].groupName}
              </div>
            </div>

            <div
              className="intr-campus-group-con"
              onClick={() => {
                this.changeifTextIntro(array[index - 1].depart);
              }}
            >
              {" "}
              <div
                className="intr-campus-group-background"
                style={{ backgroundColor: this.color[this.getRandomNumberByRange(1,11)], filter: "blur(2px)" }}
              ></div>
              <div className="intr-campus-group-conText">
                {array[index ].groupName}
              </div>
            </div>
          </div>
        );
        console.log(array[index - 1]);
      }
    });
    return con;
  };

  render() {
    return (
      <div>
        {this.state.ifTextIntro !== 0 ? (
          <TextIntro
            back={this.changeBackIntro}
            history={this.props.history}
            num={this.state.ifTextIntro}
            con={this.state.context}
          />
        ) : (
          <div>
            <img src={bg} id="bg"></img>
            <div className="intr-campus">
              <div className="intr-campus-letter">中心校区</div>
              {this.groupsBar(introduction.zx.group)}
            </div>
            <div className="intr-campus">
              <div className="intr-campus-letter">兴隆山校区</div>
              {this.groupsBar(introduction.xls.group)}
            </div>
            <div className="intr-campus">
              <div className="intr-campus-letter">软件园校区</div>
              {this.groupsBar(introduction.rj.group)}
            </div>
            <div id="intr-campus-takePosition"></div>
          </div>
        )}
      </div>
    );
  }
}

export default Introduce;

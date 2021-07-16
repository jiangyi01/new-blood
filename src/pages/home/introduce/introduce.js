<<<<<<< HEAD
import React, { Component } from "react";
import { Button } from "antd";
import TextIntro from "./textIntro/textIntro";
import "./introduce.css";
import bg from "../../../constants/img/background-introduce.png";

class Introduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifTextIntro: 0,
     
    };
  }
  changeifTextIntro = (type) => {
    this.setState({
      ifTextIntro: 1,
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
  render() {
    return (
      <div>
        {this.state.ifTextIntro !== 0 ? (
          <TextIntro back={this.changeBackIntro} history={this.props.history} num={this.state.ifTextIntro}/>
        ) : (
          <div>
            <img src={bg} id="bg"></img>
            <div className="intr-campus">
              <div className="intr-campus-letter">中心校区</div>
              <div className="intr-campus-group">
             
                  <div
                    className="intr-campus-group-con"
                    onClick={() => {
                      this.changeifTextIntro(1,"");
                    }}
                  >
                    团队发展事业群
                  </div>
              

           
                  <div
                    className="intr-campus-group-con"
                    onClick={() => {
                      this.changeifTextIntro(1);
                    }}
                  >
                    易班工作站
                  </div>
          
              </div>
              <div className="intr-campus-group">
                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  技术工程事业群
                </div>{" "}
                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  网络媒体事业群
                </div>
              </div>
              <div className="intr-campus-group">
                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  应用服务事业群
                </div>{" "}
                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  媒体运营中心
                </div>
              </div>
            </div>
            <div className="intr-campus">
              <div className="intr-campus-letter">兴隆山校区</div>

              <div className="intr-campus-group">
                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  兴隆山分站
                </div>

                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  技术工程事业群
                </div>
              </div>
            </div>
            <div className="intr-campus">
              <div className="intr-campus-letter">软件园校区</div>
              <div id="intr-campus-group-software">
                <div
                  className="intr-campus-group-con"
                  id="intr-campus-group-con-software"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  软件园分站
                </div>
               
              </div>
            </div>
            <div id="intr-campus-takePosition"></div>

          </div>
        )}
      </div>
    );
  }
}

export default Introduce;
=======
import React, { Component } from "react";
import { Button } from "antd";
import TextIntro from "./textIntro/textIntro";
import "./introduce.css";
import bg from "../../../constants/img/background-introduce.png";

class Introduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifTextIntro: 0,
     
    };
  }
  changeifTextIntro = (type) => {
    this.setState({
      ifTextIntro: 1,
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
  render() {
    return (
      <div>
        {this.state.ifTextIntro !== 0 ? (
          <TextIntro back={this.changeBackIntro} history={this.props.history} num={this.state.ifTextIntro}/>
        ) : (
          <div>
            <img src={bg} id="bg"></img>
            <div className="intr-campus">
              <div className="intr-campus-letter">中心校区</div>
              <div className="intr-campus-group">
             
                  <div
                    className="intr-campus-group-con"
                    onClick={() => {
                      this.changeifTextIntro(1,"");
                    }}
                  >
                    团队发展事业群
                  </div>
              

           
                  <div
                    className="intr-campus-group-con"
                    onClick={() => {
                      this.changeifTextIntro(1);
                    }}
                  >
                    易班工作站
                  </div>
          
              </div>
              <div className="intr-campus-group">
                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  技术工程事业群
                </div>{" "}
                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  网络媒体事业群
                </div>
              </div>
              <div className="intr-campus-group">
                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  应用服务事业群
                </div>{" "}
                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  媒体运营中心
                </div>
              </div>
            </div>
            <div className="intr-campus">
              <div className="intr-campus-letter">兴隆山校区</div>

              <div className="intr-campus-group">
                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  兴隆山分站
                </div>

                <div
                  className="intr-campus-group-con"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  技术工程事业群
                </div>
              </div>
            </div>
            <div className="intr-campus">
              <div className="intr-campus-letter">软件园校区</div>
              <div id="intr-campus-group-software">
                <div
                  className="intr-campus-group-con"
                  id="intr-campus-group-con-software"
                  onClick={() => {
                    this.changeifTextIntro(1);
                  }}
                >
                  软件园分站
                </div>
               
              </div>
            </div>
            <div id="intr-campus-takePosition"></div>

          </div>
        )}
      </div>
    );
  }
}

export default Introduce;
>>>>>>> 82b70a80e8268a6b4109ead15b0113108f60d1fa

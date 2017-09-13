import React, { Component } from "react";
import {Nav} from 'react-bootstrap';

class Log extends Component{
  render(){
    return (
      <Nav pullRight>
        <li key="4"><a href="https://www.baidu.com/">登录</a></li>
        <li key="5"><a href="https://www.baidu.com/">注册</a></li>
      </Nav>
    );
  }
}

module.exports = Log;

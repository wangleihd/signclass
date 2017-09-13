import React, { Component } from "react";
import {Nav} from 'react-bootstrap';

class Hnav extends Component{
  render(){
    return (
      <Nav>
        <li key="1"><a href="#">首页</a></li>
        <li key="2"><a href="#">在线报名</a></li>
        <li key="3"><a href="#">已报课堂</a></li>
      </Nav>
    );
  }
}

module.exports = Hnav;

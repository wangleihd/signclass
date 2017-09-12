import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Index extends React.Component {

  render(){
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">思习培训班</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <li><a href="#one">首页</a></li>
            <li><a href="#two">在线报名</a></li>
            <li><a href="#three">已报课堂</a></li>
          </Nav>
          <Nav pullRight>
            <li><a href="https://www.baidu.com/">登录</a></li>
            <li><a href="https://www.baidu.com/">注册</a></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

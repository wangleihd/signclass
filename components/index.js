import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import axios from 'axios';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Li} from 'react-bootstrap';


class Index extends React.Component {
  componentWillMount(){
    axios.get('/apis/p/')
    .then(function(response){
      console.log(response);
      console.log(response.data[0].name);
    })
    .catch(function(error){
      console.log(error);
    });
  }

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
            <li key="1"><a href="#">首页</a></li>
            <li key="2"><a href="#">在线报名</a></li>
            <li key="3"><a href="#">已报课堂</a></li>
          </Nav>
          <Nav pullRight>
            <li key="4"><a href="https://www.baidu.com/">登录</a></li>
            <li key="5"><a href="https://www.baidu.com/">注册</a></li>
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

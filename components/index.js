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
            <NavItem eventKey={1} href="#one">首页</NavItem>
            <NavItem eventKey={2} href="#three">在线报名</NavItem>
            <NavDropdown eventKey={3} title="已报课程" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">登录</NavItem>
            <NavItem eventKey={2} href="#">注册</NavItem>
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

import React from 'react';
import ReactDOM from 'react-dom';
import Img from './index/img';
import Log from './index/log';
import Hnav from './index/head-nav';
import { Router, Route} from 'react-router';
import axios from 'axios';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


class Index extends React.Component {
  // componentWillMount(){
  //   axios.get('/apis/p/')
  //   .then(function(response){
  //     console.log(response);
  //     console.log(response.data[0].name);
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   });
  // }

  render(){
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">思习培训班</a>
          </Navbar.Brand>
          <Img></Img>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Hnav></Hnav>
          <Log></Log>
        </Navbar.Collapse>
      </Navbar>
    );
};

}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

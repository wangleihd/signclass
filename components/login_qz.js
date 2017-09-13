import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import {Form , Col , FormGroup , Button ,Checkbox ,ControlLabel ,FormControl} from 'react-bootstrap';
import axios from 'axios';

class Login_qz extends React.Component {

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
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
      </Form>
      </div>
    );
  };
}





ReactDOM.render(
        <Login_qz />,
        document.getElementById('login_qz')
      );

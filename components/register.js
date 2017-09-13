import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import axios from 'axios';
import { Form, FormGroup, Col, FormControl, Checkbox,ControlLabel,Button} from 'react-bootstrap';

class Register extends React.Component {
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
      <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={3}>
        邮箱
      </Col>
      <Col sm={9}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={3}>
        用户名
      </Col>
      <Col sm={9}>
        <FormControl type="text" placeholder="user" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={3}>
        密码  
      </Col>
      <Col sm={9}>
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
    );
};

}


ReactDOM.render(
  <Register />,
  document.getElementById('register')
);

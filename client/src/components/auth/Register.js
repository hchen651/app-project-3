//
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import {Form, FormControl, FormGroup, ControlLabel, Row, Col, Container, Button} from 'react-bootstrap';



class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
this.props.registerUser(newUser, this.props.history); 
  };
render() {
    const { errors } = this.state;
return (
  <Container>
  <Row> 
  <Col>
  <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left"></i> Back to
              home
            </Link>
  </Col>
  <Col xs={6}>
    
    <div className="col s12" style={{ paddingTop: "20px" }}>
    <h4>
    <b>Register</b> below
    </h4>
    <p className="grey-text text-darken-1">
     Already have an account? <Link to="/login">Log in</Link>
    </p>
    </div> 

   <Form>
  <Form.Group controlId="formFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="" placeholder="Enter your first name" />
  </Form.Group>
  <Form.Group controlId="formLastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="" placeholder="Enter your last name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter your email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword2">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
    <Form.Text className="text-muted">
      Passwords have to match 
    </Form.Text>
  </Form.Group>
  <Button variant="dark" type="submit">
    Submit
  </Button>

</Form>

</Col>
<Col></Col>

</Row>
</Container>
          
          
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
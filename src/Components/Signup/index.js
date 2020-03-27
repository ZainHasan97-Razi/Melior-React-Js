import React, { Component } from "react";
import { Row, Col, Button, Input, Icon, Checkbox, Spin, Alert } from "antd";
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import "./index.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreater from '../../Redux/Actions/authAction';
import logo from "../../assets/images/Group24.svg";
import Header from '../Header';
import Footer from '../Footer';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.user) {
      this.props.history.push(`/${nextprops.userType}`)
    } else {
      alert(nextprops.signUpError);
    }
  }

  handleChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;

    let test = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    if (name.trim().length === 0) {
      alert("Please enter your name");
    }
    else if (test === false) {
      alert("Please enter a volid email");
    }
    else if (password.trim().length <= 0) {
      alert("Please enter password")
    }
    else {
      this.props.authActionCreater.signUp({ name, email, password }, this.props.history);
    }
  }

  render() {
    return (
      <div>
        <Header {...this.props}/>
        <Row type="flex" justify="center" id="vh100" className="signup-container">
        <Col xxl={5} xl={6} lg={7} md={9} sm={14} xs={22}>
          <Row className="signup-box" style={{marginTop:"40%"}}>
            <Row type="flex" justify="center">
              <img className="signup-logo" src={logo} alt="logo" />
            </Row>
            <Row type="flex" justify="center">
              <h4>Hey there! Let's get started.</h4>
            </Row>
            <Row className="row-input-name" type="flex" justify="center">
              <Input
                placeholder="Name"
                onChange={(event) => this.handleChange("name", event)}
                className="input-name"
                prefix={
                  <Icon
                    className="username-icon"
                    type="user"
                  // style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
              />
            </Row>
            <Row className="row-input-email" type="flex" justify="center">
              <Input
                placeholder="Username or Email"
                className="input-email"
                onChange={(event) => this.handleChange("email", event)}
                prefix={
                  <Icon
                    className="username-icon"
                    type="mail"
                  />
                }
              />
            </Row>
            <Row className="row-input-password" type="flex" justify="center">
              <Input
                placeholder="Password"
                type="password"
                onChange={(event) => this.handleChange("password", event)}
                className="input-password"
                prefix={
                  <Icon
                    className="username-icon"
                    type="lock"
                  />
                }
              />
            </Row>
            <Row type="flex">
              <h5>
                Password Strength :{" "}
                <span className="pass-strength">
                  <i>Strong</i>
                </span>
              </h5>
            </Row>
            <Row type="flex">
              <Checkbox className="check-box">
                <span className="span2-text">
                  I agree with <a>Privacy Policy</a>
                </span>
              </Checkbox>
            </Row>
            <Row className="row-signup-button" type="flex" justify="center">
              <Button className="signup-button" style={{backgroundColor:" #5D89C7"}} onClick={(e) => this.handleClick(e)}>Sign up</Button>
            </Row>
          </Row>
          <Row className="row-login" type="flex" justify="center">
            <h4 className="new-to-melior-text">Existing User? <Link to="login">Login</Link></h4>
          </Row>
        </Col>
        {
          this.props.isLoading ?
            (<Spin
              tip="Loading..."
              size="large"
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: 10,
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}>
            </Spin>) : null
        }
      </Row>
        <Footer/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    isLoading: state.authReducer.isLoading,
    user: state.authReducer.user,
  })
}

const mapDispatchToProps = (dispatch) => ({
  authActionCreater: bindActionCreators(authActionCreater, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);




import React, { Component } from "react";
import { Row, Col, Button, Input, Icon, Checkbox, Spin } from "antd";
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import "./index.css";
import logo from "../../assets/images/Group24.svg";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreater from '../../Redux/Actions/authAction';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    let test = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    if (test === false) {
      alert("Please enter a volid email");
    }
    else if (password.trim().length <= 0) {
      alert("Please enter password")
    }
    else {
      this.props.authActionCreater.signIn({ email, password }, this.props.history);
    }
  }


  handeTextChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
     <div className="login-div">
       <Header {...this.props}/>
        <Row type="flex" justify="center" id="vh100" className="login-container">
        <Col xxl={5} xl={6} lg={7} md={9} sm={14} xs={22}>
          <Row className="row-login-box">
            <Row type="flex" justify="center">
              <img className="login-logo" src={logo} alt="logo" />
            </Row>
            <Row type="flex" justify="center">
              <h4 style={{ textAlign: "center" }}>Welcome back! Please login to continue.</h4>
            </Row>
            <Row className="input-email" type="flex" justify="center">
              <Input
                placeholder="Username or Email"
                name="email"
                onChange={this.handeTextChange}
                value={this.state.email}
                prefix={
                  <Icon
                    className="username-icon"
                    type="mail"
                  />
                }
              />
            </Row>
            <Row className="input-password" type="flex" justify="center">
              <Input
                placeholder="Password"
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handeTextChange}
                prefix={
                  <Icon
                    className="username-icon"
                    type="lock"
                  />
                }
              />
            </Row>
            <Row className="row-remember-forgot-pass" type="flex" justify="center">
              <Col span={14}>
                <Checkbox className="check-box">
                  <span className="span2-text">Remember Me</span>
                </Checkbox>
              </Col>
              <Col span={10}>
                <Link className="forgot-pass-span">
                  <h5 className="h5-forgot-password">Forgot Password ?</h5>
                </Link>
              </Col>
            </Row>
            <Row className="row-signin-button" type="flex" justify="center">
              <Button
                onClick={this.handleSubmit}
                className="signin-button"
              >Sign in
              </Button>
            </Row>
          </Row>
          <Row type="flex" className="row-signup" justify="center">
            <h4 className="new-to-melior-text">
              New to meliorMD? <Link to="signup">Signup</Link>
            </h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

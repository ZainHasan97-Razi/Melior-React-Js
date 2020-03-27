import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import {  Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import './index.css';
import logo from "../../assets/images/meliorMD-logo-no-background.svg";
import DrawerTab from '../Drawer'

class Header extends Component {

    navigate = (page) => {
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="header-div">
                <Row type="flex" className="header-bar">
                    <Col lg={0} md={0} sm={2} xs={4}>
                        <Row type="flex" justify="center" align="middle">
                            <DrawerTab/>
                        </Row>
                    </Col>
                    <Col lg={5} md={5} sm={14} xs={16}>
                        <Row type="flex" justify="center">
                            
                            <img className="header-logo" src={logo} alt="logo" onClick={() =>this.navigate("/")} />
                            
                        </Row>
                    </Col>
                    <Col lg={16} md={15} sm={0} xs={0}>
                        <div className="navbar">
                            <ul className="navbar-links">
                                <li><Link className="link" to="/about" >ABOUT</Link></li>
                                <li>DIRECTORY</li>
                                <li><Link className="link" to="/contact" >CONTACT US</Link></li>
                                <li><Link className="link" to="/add_provider_listing" >ADD A PROVIDER LIST</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={0} md={0} sm={2} xs={0}></Col>
                    <Col lg={3} md={4} sm={6} xs={0}>
                        <div className="vl">
                            <div>
                                <Link to='/login'>
                                    <Button type="primary" className="provider-button">Provider Login</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Header;
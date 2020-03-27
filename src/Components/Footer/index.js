import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import logo from '../../assets/images/footer-lgo.webp';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class Footer extends Component {

    render() {
        return (
            <div className="footer-div">
                <Row className="footer">
                    <Col lg={8} md={5} sm={5} xs={5}></Col>
                    <Col span={14}>
                        <Col lg={10} md={24} sm={24} xs={24} className="footer-logo-container">
                            <Row className="footer-logo">
                                <img className="melior-logo" src={logo} alt="logo" />
                            </Row>
                            <Row className="footer-logo-text">
                                <p>
                                    MeliorMD is a one stop shop for finding health care providers
                                    across specialties. Finding a healthcare provider can be
                                </p>
                            </Row>
                        </Col>
                        <Col lg={1} md={0} sm={0} xs={0}></Col>
                        <Col lg={5} md={8} sm={24} xs={24} className="border-black">
                            <Row className="links-title">
                                <h4>FEATURES</h4>
                            </Row>
                            <Row className="links-list">
                                <ul>
                                    <li className="li-padding">Find Doctors</li>
                                    <li className="li-padding">Add a provider listing</li>
                                    <li className="li-padding">About</li>
                                    <li className="li-padding">Mission</li>
                                </ul>
                            </Row>
                        </Col>
                        <Col lg={4} md={8} sm={24} xs={24} className="border-black">
                            <Row className="links-title">
                                <h4>COMPANY</h4>
                            </Row>
                            <Row className="links-list">
                                <ul>
                                    <li className="li-padding">About Us</li>
                                    <li className="li-padding">Pricing</li>
                                    <li className="li-padding">Careers</li>
                                    <li className="li-padding">Contact Us</li>
                                </ul>
                            </Row>
                        </Col>
                        <Col lg={3} md={8} sm={24} xs={24} className="border-black">
                        <Row className="links-title">
                            <h4>FOLLOW</h4>
                        </Row>
                        <Row type="flex" justify="space-between">
                            <Icon type="linkedin" className="icon icon-social" />
                            <IconFont type="icon-facebook" className="icon icon-social" />
                            <IconFont type="icon-twitter" className="icon icon-social" />
                        </Row>
                    </Col>
                    </Col>
                    <Col lg={3} md={5} sm={5} xs={5}></Col>
                </Row>

                <Row type="flex" justify="space-around">
                    <Row className="copy-right-container">
                        <p>© 2019 CityNetworksGroup. All rights reserved</p>
                    </Row>
                    <Row className="footer-bottom">
                        <ul className="terms-privacy">
                            <li>Legal</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>devias.i</li>
                        </ul>
                    </Row>
                </Row>
            </div>
        )
    }
}


export default Footer;
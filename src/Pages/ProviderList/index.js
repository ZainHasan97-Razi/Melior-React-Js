import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Tabs, Radio } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const InputGroup = Input.Group;
const { TabPane } = Tabs;

class ProviderList extends Component {

    render() {
        return (
            <div className="provoder-list-body">
                <Row type="flex" justify="center">
                    <Col span={12} className="search-container">
                        <Row type="flex" justify="center">
                            <h1>Find your best Physician</h1>
                        </Row>
                        <Row type="flex" justify="center">
                            <h2>meliorMD will help you in that important decision.</h2>
                        </Row>
                        <Row className="search-parameters">
                            <InputGroup size="large">
                                <Row gutter={24}>
                                    <Col span={8}>
                                        <label className="search-parameters-label">SPECIALITY BY PROVIDER CATEGORY</label>
                                        <Input defaultValue="e.g California" />
                                    </Col>
                                    <Col span={8}>
                                        <label className="search-parameters-label">LOCATIONS BY CITY</label>
                                        <Input defaultValue="e.g California" />
                                    </Col>
                                    <Col span={8}>
                                        <Button>Search</Button>
                                    </Col>
                                </Row>
                            </InputGroup>
                        </Row>

                        <div>
                            <p>HIDE ADVANCED SEARCH <Icon type="caret-right" /></p>
                        </div>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <div>
                            <h1>Find a listing</h1>
                        </div>
                        <div className="card-container">
                            <Tabs type="card">
                                <TabPane tab="Dentistry" key="1">
                                    <Row gutter={24}>
                                        <Col span={12}>
                                            <ul>
                                                <li>
                                                    <Radio value="General Dentist">General Dentist</Radio>
                                                </li>
                                                <li>
                                                    <Radio value="Endodontist">Endodontist</Radio>
                                                </li>
                                                <li>
                                                    <Radio value="Oral and Maxillofacial Surgeon">Oral and Maxillofacial Surgeon</Radio>
                                                </li>
                                                <li>
                                                    <Radio value="Orthodontist">Orthodontist</Radio>
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col span={12}>
                                            <ul>
                                                <li>
                                                    <Radio value="Pediatric Dentist">Pediatric Dentist</Radio>
                                                </li>
                                                <li>
                                                    <Radio value="Periodontist">Periodontist</Radio>
                                                </li>
                                                <li>
                                                    <Radio value="Prosthodontics">Prosthodontics</Radio>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div>
                                            <label>HOSPITAL/PRACTICE NAME</label>
                                            <Input placeholder="Search by business name" />
                                        </div>
                                    </Row>
                                    <Row>
                                        <InputGroup size="large">
                                            <Row gutter={24}>
                                                <Col span={12}>
                                                    <label>CITY OR STATE</label>
                                                    <Input defaultValue="e.g California" />
                                                </Col>
                                                <Col span={12}>
                                                    <label>ZIP CODE</label>
                                                    <Input defaultValue="e.g California" />
                                                </Col>
                                            </Row>
                                        </InputGroup>
                                    </Row>
                                    <Row>
                                        <div>
                                            <p>HIDE ADVANCED SEARCH <Icon type="caret-right" /></p>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div>
                                            <p>TYPE OF PATIENT SERVED</p>
                                            <ul>
                                                <li>
                                                    <Radio value="Adults Only">Adults Only</Radio>
                                                </li>
                                                <li>
                                                    <Radio value="Both Adults and Children">Both Adults and Children</Radio>
                                                </li>
                                                <li>
                                                    <Radio value="Children & Adolescents Only">Children & Adolescents Only</Radio>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>GENDER OF HEALTHCARE PROVIDER</p>
                                            <ul>
                                                <li>
                                                    <Radio value="Female">Female</Radio>
                                                </li>
                                                <li>
                                                    <Radio value="Male">Male</Radio>
                                                </li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div>
                                            <Button>SHOW HEALTHCARE PROVIDERS (212 RESULTS)</Button>
                                        </div>
                                    </Row>
                                </TabPane>
                                <TabPane tab="Physician" key="2">
                                    <p>Content of Tab Pane 2</p>
                                    <p>Content of Tab Pane 2</p>
                                    <p>Content of Tab Pane 2</p>
                                </TabPane>
                                <TabPane tab="Other Healthcare Providers" key="3">
                                    <p>Content of Tab Pane 3</p>
                                    <p>Content of Tab Pane 3</p>
                                    <p>Content of Tab Pane 3</p>
                                </TabPane>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={12}>
                        <Row>
                            <div>
                                <h3>Search by State:</h3>
                            </div>
                        </Row>
                        <Row gutter={24}>
                            <Col span={4}>
                                <div>
                                    <ul>
                                        <li>Alabama</li>
                                        <li>Alaska</li>
                                        <li>Arizona</li>
                                        <li>Arkansas</li>
                                        <li>California</li>
                                        <li>Colorado</li>
                                        <li>Connecticut</li>
                                        <li>Delaware</li>
                                        <li>Florida</li>
                                        <li>Georgia</li>
                                        <li>Idaho</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={4}>
                                <div>
                                    <ul>
                                        <li>Idaho</li>
                                        <li>Illinois</li>
                                        <li>Indiana</li>
                                        <li>Iowa</li>
                                        <li>Kansas</li>
                                        <li>Kentucky</li>
                                        <li>Louisiana</li>
                                        <li>Maine</li>
                                        <li>Maryland</li>
                                        <li>Massachusetts</li>
                                        <li>Michigan</li>
                                        <li>Idaho</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={5}>
                                <div>
                                    <ul>
                                        <li>Minnesota</li>
                                        <li>Mississippi</li>
                                        <li>Missouri</li>
                                        <li>Montana</li>
                                        <li>Nebraska</li>
                                        <li>Nevada</li>
                                        <li>New Hampshire</li>
                                        <li>New Jersey</li>
                                        <li>New Mexico</li>
                                        <li>New York</li>
                                        <li>North Carolina </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={5}>
                                <div>
                                    <ul>
                                        <li>North Dakota</li>
                                        <li>Ohio</li>
                                        <li>Oklahoma</li>
                                        <li>Oregon</li>
                                        <li>Pennsylvania</li>
                                        <li>Puerto Rico</li>
                                        <li>Rhode Island</li>
                                        <li>South Carolina</li>
                                        <li>South Dakota</li>
                                        <li>Tennessee</li>
                                        <li>Texas</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col span={4}>
                                <div>
                                    <ul>
                                        <li>Utah</li>
                                        <li>Vermont</li>
                                        <li>Virginia</li>
                                        <li>Washington</li>
                                        <li>Washington DC</li>
                                        <li>West Virginia</li>
                                        <li>Wisconsin</li>
                                        <li>Wyoming</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default ProviderList;
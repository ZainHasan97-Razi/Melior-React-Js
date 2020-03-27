import React, { Component } from 'react'
import { Row, Col, Input, Icon, Rate, Breadcrumb, Select, Button, Typography } from 'antd';
import MyGoogleMap from '../../Components/GoogleMap';
import 'antd/dist/antd.css';
import './index.css';
import { connect } from 'react-redux';
import dr_image from '../../assets/images/dr_img.webp';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const { Option } = Select;

class SearchOnMap extends Component {

    constructor() {
        super();
        this.state = {
            results: [],
            result_count: 0
        }
    }

    componentDidMount() {
        this.setState({ ...this.props.searchResult })
    }

    camelCaseAddress = (address) =>{
        return address.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    }

    render() {
        const { results, result_count } = this.state;
        return (
            <div>
                <Header {...this.props}/>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={24}>
                        <Row type="flex" justify='center'>
                            <Col span={24}>
                                <Input
                                    placeholder="New York"
                                    prefix={<Icon type="search" />}
                                    style={{ width: '100%', marginTop: '3px' }}
                                />
                            </Col>
                        </Row>
                        <Row className="layout-row">
                            <Col span={24}>
                                <Breadcrumb className="bread-crumb">
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>California</Breadcrumb.Item>
                                    <Breadcrumb.Item>San Francisc</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </Row>
                        <Row type="flex" align="middle" className="search-row">
                            <Col lg={10} md={10} sm={24} xs={24}>
                                <span className="num-doctors">{result_count} <span style={{ color: '#727573' }}> Doctors</span></span>
                            </Col>
                            <Col lg={1} md={1} sm={1} xs={1}></Col>
                            <Col lg={3} md={3} sm={5} xs={4}><div className="more-filter">More Filters</div></Col>
                            <Col lg={5} md={5} sm={9} xs={10}>
                                <Select
                                    className="show-search"
                                    showSearch
                                    placeholder="E.g Physician"
                                    optionFilterProp="Physician"
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="physician">Physician</Option>
                                    <Option value="surgeon">Surgeon</Option>
                                    <Option value="dentist">Dentist</Option>
                                </Select>
                            </Col>

                            <Col lg={5} md={5} sm={9} xs={9}>
                                <Select
                                    className="show-search"
                                    showSearch
                                    placeholder="Sort by"
                                    optionFilterProp="Physician"
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row className="provide-list-container">
                            {
                                //================== Card from here =========================//
                                results.map((value, index) => {
                                    return (
                                        <Col lg={24} md={24} sm={24} xs={24} key={index}>
                                            <Row type="flex" justify="center" className="card-style">
                                                <Col xl={5} lg={6} md={6} sm={6} xs={6}>
                                                    <Row>
                                                        <img src={dr_image} alt="dr_image" width="100%" />
                                                    </Row>
                                                </Col>
                                                <Col xl={19} lg={18} md={18} sm={18} xs={18}>
                                                    <Row type="flex" className="class-detail-row">
                                                        <div >
                                                            <h4>{value.basic.name}, {value.basic.credential}</h4>
                                                            <Col xxl={17} xl={16} lg={15} md={15} sm={15} xs={15}>
                                                                <Rate className="rate-icons" disabled defaultValue={4} />
                                                                <p className="patient-rating">108 Patient Satisfaction Ratings<br />10 Patient Comments</p>
                                                            </Col>
                                                            <Col xxl={7} xl={8} lg={9} md={9} sm={9} xs={9}>
                                                                <Row type="flex">
                                                                    <h5 className="provider-info-title">DEPARTMENTS</h5>
                                                                    <Typography className="provider-info">{value.taxonomies[0].desc}</Typography>
                                                                    <h5 className="provider-info-title">LOCATIONS</h5>
                                                                    <Typography className="provider-info">{ this.camelCaseAddress(`${value.addresses[0].address_1} ${value.addresses[0].city}`)} </Typography>
                                                                </Row>
                                                            </Col>
                                                        </div>
                                                    </Row>
                                                    <Row type="flex">
                                                        <Col className="view-on-map-col" xxl={18} xl={17} lg={15} md={13} sm={14} xs={15}><h6>View on Map | Directions</h6></Col>
                                                        <Col xxl={6} xl={7} lg={9} md={11} sm={10} xs={9}>
                                                            <Button className="button-appointment">
                                                                <Row type="flex" justify="space-around">
                                                                    <Col lg={10} md={10} sm={24} xs={24}>Request </Col>
                                                                    <Col lg={14} md={14} sm={24} xs={24}>appointment</Col>
                                                                </Row>
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>

                    <Col lg={12} md={12} sm={12} xs={24}>
                        <div className="map-border">
                            <MyGoogleMap
                                searchResult={results}
                                google={this.props.google}
                                center={{ lat: 18.5204, lng: 73.8567 }}
                                height='530px'
                                zoom={15}
                            />
                        </div>
                    </Col>

                </Row>
                <Footer/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        searchResult: state.searchReducer.data,
    })
}

export default connect(mapStateToProps, null)(SearchOnMap);

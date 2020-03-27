import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Row, Col, Input, Button, Icon, Tabs, Select, Spin } from 'antd';
import State from './searchByState';
import DentistryFilter from '../Dentistry';
import { searchByProviderCategoryAndCity } from '../../Redux/Actions/searchActions';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';

const { TabPane } = Tabs;
const { Option } = Select;

class Search extends Component {
  constructor() {
    super();
    this.state = {
      hide: true,
      cityName: "",
      providerCategory: "Anesthesiology",
    }
  }


  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  }

  handleSelect = name => value => {
    this.setState({ [name]: value });
  }

  handleSearch = () => {
    const { cityName, providerCategory } = this.state;
    if (cityName === "" && cityName === " ") {
      alert("Enter any city");
    }
    else {
      this.props.searchByProviderCategoryAndCity(cityName, providerCategory);
    }
  }

  handleHide = () => {
    this.setState({ hide: !this.state.hide });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchResult.result_count && this.state.hide) {
      this.props.history.push('search_result');
    }
  }

  render() {
    const { cityName, providerCategory, hide } = this.state;
    return (
      <div>
        <Header {...this.props}/>
        <div className="provoder-list-body">
          <Row className="row-container" id="vh100" style={{marginBottom:"0px", paddingBottom:"0px"}}>
            <Col lg={12} md={15} sm={20} xs={23}>
              <Row className={hide ? "div-container-hide" : "div-container"} >
                <span style={{ padding: '15px' }}>
                  <h1 className="text-style1">Find your best Physicians</h1>
                  <h2 className="text-style2">meliorMD will help you in that important decision</h2>
                  <Row type="flex" justify="center" style={{ padding: '10px' }}>
                    <Col md={10} sm={10} xs={23}>
                      <Row type="flex" justify="center">
                        <div className="div-input1">
                          <label className="search-input-label">SPECIALITY BY PROVIDER CATEGORY</label>
                          <Select
                            showSearch
                            placeholder="Sort by"
                            optionFilterProp="children"
                            className="input1"
                            value={providerCategory}
                            onSelect={this.handleSelect("providerCategory")}
                          >
                            <Option value="Anesthesiology">Anesthesiology</Option>
                            <Option value="Dentist">Dentist</Option>
                            <Option value="Nurse Practitioner Family">Nurse Practitioner Family</Option>
                            <Option value="Surgery">Orthopaedic Surgery</Option>
                            <Option value="Physical Therapist Orthopedic">Physical Therapist Orthopedic</Option>
                            <Option value="Physician">Physician</Option>
                            <Option value="Physician Assistant">Physician Assistant</Option>
                            <Option value="Radiology">Radiology</Option>
                            <Option value="Rheumatology">Rheumatology</Option>
                            <Option value="Social Worker Clinical">Social Worker Clinical</Option>
                          </Select>
                        </div>
                      </Row>
                    </Col>

                    <Col md={8} sm={8} xs={23}>
                      <Row type="flex" justify="center">
                        <div className="div-input2">
                          <label className="search-input-label">LOCATION BY CITY</label>
                          <Input className="input2" placeholder="E.g San Francisc" value={cityName} onChange={this.handleChange("cityName")} />
                        </div>
                      </Row>
                    </Col>

                    <Col md={6} sm={6} xs={23}>
                      <Row type="flex" justify="center">
                        <div className="button-div">
                          <Button className="button-style" onClick={this.handleSearch}>SEARCH <Icon type="arrow-right" className="icon icon-arrow " /></Button>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label className="search-input-label show-btn" onClick={this.handleHide}>{hide ? "SHOW" : "HIDE"} ADVANCED SEARCH <Icon type={hide ? "caret-right" : "caret-down"} /></label >
                    </Col>
                  </Row>
                </span>
              </Row>
            </Col>
          </Row>
          {
            !hide &&
            <Row className="row-container" style={{marginTop:"0px", paddingTop:"0px"}}>
              <Col lg={12} md={15} sm={20} xs={23}>
                <Row className="find-a-listing">
                  <h3>Find a listing</h3>
                </Row>
                <Row className="card-container filter-container" >
                  <Tabs type="card">
                    <TabPane tab="Dentistry" key="1">
                      <DentistryFilter hide={hide} history={this.props.history} />
                    </TabPane>

                    <TabPane tab="Physicians" key="2">
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
                </Row>
                <Row>
                  <State history={this.props.history} />
                </Row>
              </Col>
            </Row>
          }
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
        </div>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    searchResult: state.searchReducer.data,
    isLoading: state.searchReducer.isLoading,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    searchByProviderCategoryAndCity: (city_name, providerCategory) => dispatch(searchByProviderCategoryAndCity(city_name, providerCategory))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
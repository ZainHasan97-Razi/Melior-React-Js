import React, { Component } from 'react';
import { Row, Col, Input, Button, Icon, Checkbox, Breadcrumb, Select, Pagination } from 'antd';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import dr_image from '../../assets/images/dr_img1.webp';
import Header from '../Header';
import Footer from '../Footer';

const { Option } = Select;

class SearchResult extends Component {
    constructor() {
        super();
        this.state = {
            hide: false,
            hideAdvSearch: true,
            result_count: 0,
            results: [],
            filterResults: [],
            cityName: "",
            zipCode: "",
            providerCategory: "",
            specialProviderCategory: "",
            gender: "",
        }
    }

    componentDidMount() {
        const { results, result_count } = this.props.searchResult;

        window.addEventListener("resize", this.checkWindowDimensions());

        this.setState({ results, result_count, filterResults: results, resultToRender: results.slice(0, 10) });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkWindowDimensions)
    }

    handleHide = () => {
        this.setState({ hide: !this.state.hide });
    }

    handleAdvSearchHide = () => {
        this.setState({ hideAdvSearch: !this.state.hideAdvSearch });
    }

    checkWindowDimensions() {
        if (window.innerWidth >= 767) {
            this.setState({ hideAdvSearch: true });
        }
    }

    handleChange = (pageNumber) => {

        let { filterResults } = this.state;
        let resultToRender = [];

        if (pageNumber === 1) {
            resultToRender = filterResults.slice(0, 10);
        }
        else {
            resultToRender = filterResults.slice((pageNumber - 1) * 10, pageNumber * 10);
        }
        this.setState({ resultToRender });
    }

    filterFetchResult = (name, value) => {
        console.log({ name, value })
        let { cityName, zipCode, providerCategory, gender, specialProviderCategory } = this.state;
        let filters = {
            cityName,
            zipCode,
            providerCategory,
            specialProviderCategory,
            gender
        }

        filters[name] = value;
        let { results, filterResults } = this.state;
        filterResults = results.filter(data => {

            return (
                data.addresses[0].city.toLowerCase().indexOf(filters.cityName.toLowerCase()) !== -1
                &&
                data.addresses[0].postal_code.toLowerCase().indexOf(filters.zipCode.toLowerCase()) !== -1
                &&
                data.basic.gender.toLowerCase().indexOf(filters.gender.toLowerCase()) !== -1
                &&
                data.taxonomies[0].desc.toLowerCase().indexOf(filters.providerCategory.toLowerCase()) !== -1
                &&
                data.taxonomies[0].desc.toLowerCase().indexOf(filters.specialProviderCategory.toLowerCase()) !== -1
            )
        });
        this.setState({ filterResults, ...filters, resultToRender: filterResults.slice(0, 10) })

    }

    handleSelect = name => value => {
        this.filterFetchResult(name, value);
    }

    handleFiltersInputChange = name => (event) => {
        this.filterFetchResult(name, event.target.value);
    }

    handleFiltersCheckBoxChange = name => (event) => {
        let maleCheck = this.male.rcCheckbox.state.checked;
        let femaleCheck = this.female.rcCheckbox.state.checked;

        if (maleCheck === !femaleCheck) {
            this.filterFetchResult("gender", "");
        }
        else {
            if (maleCheck && femaleCheck) {
                this.filterFetchResult("gender", name === "male" ? "F" : "M");
            }
            else {
                this.filterFetchResult("gender", event.target.value);
            }

        }
    }

    goToProfile = (id) => {
        this.props.history.push({
            pathname: '/profile',
            state: {
                data: id
            }
        })
    }

    goToMap = () => {
        this.props.history.push("search_on_map")
    }

    render() {
        const { hide, hideAdvSearch, resultToRender, filterResults } = this.state;
        return (
            <div>
                <Header {...this.props}/>
                <div className="search-result-body">
                    <Row>
                        <Col>
                            <Breadcrumb className="bread-crumb">
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>California</Breadcrumb.Item>
                                <Breadcrumb.Item>San Francisc</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    <Row type="flex" >
                        <Col md={5} sm={24} xs={24} className="search-content">
                            <Row className="filter-result">
                                <h1>Filter Result</h1>
                            </Row>
                            {
                                hideAdvSearch ?
                                    <Row>
                                        <Row className="input-spacing">
                                            <div>
                                                <label className="input-label">LOCATIONS BY CITY</label>
                                                <Input className="search-input" placeholder="E.g San Francisc" onChange={this.handleFiltersInputChange('cityName')} />
                                            </div>
                                        </Row>
                                        <Row className="input-spacing">
                                            <div>
                                                <label className="input-label">ZIP CODE</label>
                                                <Input className="search-input" placeholder="Zip code" onChange={this.handleFiltersInputChange('zipCode')} />
                                            </div>
                                        </Row>
                                        <Row className="input-spacing">
                                            <div>
                                                <label className="input-label">PROVIDER CATEGORY</label>
                                                <Select
                                                    showSearch
                                                    placeholder="Provider Category"
                                                    optionFilterProp="children"
                                                    className="search-input"
                                                    onSelect={this.handleSelect("providerCategory")}
                                                >
                                                    <Option value="">All</Option>
                                                    <Option value="Anesthesiology">Anesthesiology</Option>
                                                    <Option value="Orthopaedic Surgery">Orthopaedic Surgery</Option>
                                                    <Option value="Dentist">Dentist</Option>
                                                    <Option value="Nurse Practitioner Family">Nurse Practitioner Family</Option>
                                                    <Option value="Physical Therapist Orthopedic">Physical Therapist Orthopedic</Option>
                                                    <Option value="Social Worker Clinical">Social Worker Clinical</Option>
                                                    <Option value="Physician Assistant">Physician Assistant</Option>
                                                </Select>
                                            </div>
                                        </Row>
                                        <Row className="input-spacing">
                                            <div className="input-spacing">
                                                <label className="input-label">SPECIALITY BY PROVIDER CATEGORY</label>
                                                <Select
                                                    showSearch
                                                    className="search-input"
                                                    placeholder="Select Speciality Provider Category"
                                                    optionFilterProp="children"
                                                    onSelect={this.handleSelect("specialProviderCategory")}
                                                >
                                                    <Option value="">All</Option>
                                                    <Option value="Obstercician/Gynecologis">Obstercician</Option>
                                                    <Option value="Gynecologis">Gynecologis</Option>
                                                    <Option value="General Practice">General Practice</Option>
                                                    <Option value="Dentist Endodontics">Dentist Endodontics</Option>
                                                    <Option value="Dentist Oral">Dentist Oral</Option>
                                                    <Option value="Maxillofacial Surgery">Maxillofacial Surgery</Option>
                                                    <Option value="Dentist Ora and Maxillofacial Surgery">Dentist Ora and Maxillofacial Surgery</Option>
                                                    <Option value="Endodontist">Endodontist</Option>
                                                    <Option value="Pediatric">Pediatric</Option>
                                                    <Option value="Pediatric Dentist">Pediatric Dentist</Option>
                                                    <Option value="Prosthodontics">Prosthodontics</Option>
                                                    {/* <Option value="Oral and Maxillofacial Surgeon">Oral and Maxillofacial Surgeon</Option> */}
                                                </Select>
                                            </div>
                                            <div className="input-spacing">
                                                <div>
                                                    <label className="input-label">HEALTH INSURANCE</label>
                                                    <Select
                                                        showSearch
                                                        className="search-input"
                                                        placeholder="Select a provider"
                                                        optionFilterProp="children"
                                                    >
                                                        <Option value="yes">Yes</Option>
                                                        <Option value="no">No</Option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <Row>
                                                <div>
                                                    <p className="advance-search" onClick={this.handleHide}>{hide ? "SHOW" : "HIDE"} ADVANCED SEARCH <Icon type={hide ? "caret-down" : "caret-up"} /></p>
                                                </div>
                                            </Row>
                                            {
                                                hide ?
                                                    ""
                                                    :
                                                    <Row>
                                                        <div>
                                                            <p className="input-label">TYPE OF PATIENT SERVED</p>
                                                            <ul className="input-ul">
                                                                <li>
                                                                    <Checkbox className="input-checkbox" value="Adults Only">Adults Only</Checkbox>
                                                                </li>
                                                                <li>
                                                                    <Checkbox className="input-checkbox" value="Both Adults and Children">Both Adults and Children</Checkbox>
                                                                </li>
                                                                <li>
                                                                    <Checkbox className="input-checkbox" value="Children & Adolescents Only">Children & Adolescents Only</Checkbox>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <p className="input-label">GENDER OF HEALTHCARE PROVIDER</p>
                                                            <ul className="input-ul">
                                                                <li>
                                                                    <Checkbox
                                                                        className="input-checkbox"
                                                                        ref={(input) => { this.female = input; }}
                                                                        value="F"
                                                                        onChange={this.handleFiltersCheckBoxChange('female')}
                                                                    >
                                                                        Female
                                                                </Checkbox>
                                                                </li>
                                                                <li>
                                                                    <Checkbox
                                                                        className="input-checkbox"
                                                                        value="M"
                                                                        ref={(input) => { this.male = input; }}
                                                                        onChange={this.handleFiltersCheckBoxChange('male')}
                                                                    >
                                                                        Male
                                                                    </Checkbox>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Row>
                                            }
                                        </Row>
                                    </Row>
                                    :
                                    ""
                            }


                            <Row style={{ display: "flex", justifyContent: "center" }}>
                                <Col
                                    lg={0}
                                    md={0}
                                    sm={1}
                                    xs={1}

                                    onClick={this.handleAdvSearchHide}
                                >
                                    <Icon style={{ fontSize: 20 }} type={hideAdvSearch ? "caret-up" : "caret-down"} />
                                </Col>
                            </Row>
                        </Col>

                        <Col md={19} sm={24} xs={24} className="search-result-body">
                            <Row type="flex" justify="center">
                                <Col lg={18} md={22} sm={22} xs={24} className="search-result-body-setting" >
                                    <Row>
                                        <Col lg={18} md={18} sm={15} xs={15}>
                                            <h1 className="search-result-number">{filterResults.length} <span style={{ color: "#000000" }}> Doctors</span></h1>
                                        </Col>
                                        <Col lg={6} md={6} sm={9} xs={9} type="flex" justify="flex-end">
                                            <Select
                                                showSearch
                                                style={{ width: '100%' }}
                                                placeholder="Sort by"
                                                optionFilterProp="children"
                                            >
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            {/*================= Card here ================= */}

                            <Row type="flex" justify="center">
                                <Col lg={18} md={22} sm={22} xs={24}>
                                    {
                                        resultToRender ?
                                            resultToRender.map((value, index) => {
                                                return (
                                                    <Row key={index} className="profile-list">

                                                        <Col xl={5} lg={6} md={6} sm={6} xs={12}>
                                                            <Row className="profile-img-container">
                                                                <img src={dr_image} alt="dr_image" className="profile-img" />
                                                            </Row>
                                                        </Col>

                                                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                            <Row type="flex">
                                                                <Row style={{ width: '100%' }} type="flex">
                                                                    <h4>{value.basic.name}, {value.basic.credential}</h4>
                                                                </Row>
                                                                <Row style={{ width: '100%' }} type="flex">
                                                                    <h5 style={{ color: "#0F6AB6", fontSize: '12px' }}>{value.taxonomies[0].desc}</h5>
                                                                </Row>
                                                                <Row style={{ width: '100%' }} type="flex">
                                                                    <h5 style={{ fontSize: '10px !important' }}>ADDRESS</h5>
                                                                </Row>
                                                                <Row style={{ width: '100%' }} type="flex">
                                                                    <h5>{value.addresses[0].address_1} -
                                                                <span className="view-on-map" onClick={this.goToMap}> View on map</span></h5>
                                                                </Row>
                                                                <Button className="view-profile" onClick={() => this.goToProfile(value)}>VIEW PROFILE</Button>
                                                            </Row>
                                                        </Col>

                                                        <Col xl={6} lg={6} md={6} sm={6} xs={24}>
                                                            <Row className="profile-list-call-container">
                                                                <Row type="flex" justify="center">
                                                                    <p className="profile-list-call profile-list-call-text">CALL</p>
                                                                </Row>
                                                                <Row type="flex" justify="center">
                                                                    <h3 className="profile-list-call profile-list-call-no">{value.number.toString().substring(0, 7).match(/.{1,3}/g).join(".")}{value.number.toString().substring(7)}</h3>
                                                                </Row>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                )
                                            })
                                            :
                                            ""
                                    }
                                </Col>
                            </Row>
                            {
                                filterResults.length > 10 ?
                                    < Row type="flex" justify="center" className="pagination-container">
                                        <Pagination defaultCurrent={1} total={filterResults.length} onChange={this.handleChange} />
                                    </Row>
                                    :
                                    undefined
                            }
                        </Col>
                    </Row>
                </div >
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

const mapDisptchToProps = (dispatch) => {
    return ({

    })
}

export default connect(mapStateToProps, mapDisptchToProps)(SearchResult);
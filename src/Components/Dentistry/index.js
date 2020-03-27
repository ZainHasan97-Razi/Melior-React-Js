import React, { Component } from 'react'
import { Row, Col, Checkbox, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { updateFilterResult } from '../../Redux/Actions/searchActions';
import 'antd/dist/antd.css';

class Dentistry extends Component {
    constructor() {
        super();
        this.state = {
            cityName: "",
            providerCategory: "Anesthesiology",
            general_dentist: "",
            endodontist: "",
            oral_and_maxillofacial_surgeon: "",
            orthodontist: "",
            pediatric_dentist: "",
            periodontist: "",
            prosthodontics: "",
            searchResult: [],
            filterData: [],
            male: "",
            fmale: "",
            zipCode: "",
            stateName: "",
            practiceName: "",
            gender: false,
            taxonomy: false,
            isShow: false
        }
    }

    componentDidMount() {
        if (this.props.searchResult.results ) {
            this.setState({ searchResult: this.props.searchResult.results })
        }
    }

    componentWillReceiveProps(nextProps) {
        if( !this.state.isShow )
        {
            this.setState({ 
                searchResult: nextProps.searchResult.results,
                filterData: nextProps.searchResult.results
            })
        }
        else {
            this.props.history.push("/search_result");
        }
    }

    handleChange = name => (event) => {
        this.setState({ [name]: event.target.value });
    }

    handleSelect = name => value => {
        this.setState({ [name]: value });
    }

    handleTaxonomyChange = (event) => {

        let name = event.target.name;
        let value = event.target.value;

        const {
            general_dentist,
            endodontist,
            oral_and_maxillofacial_surgeon,
            orthodontist,
            pediatric_dentist,
            periodontist,
            prosthodontics,
            taxonomy
        } = this.state;
        let taxonomies = {
            general_dentist,
            endodontist,
            oral_and_maxillofacial_surgeon,
            orthodontist,
            pediatric_dentist,
            periodontist,
            prosthodontics,
            taxonomy
        };

        if (event.target.checked) {
            this.setState({
                [name]: value, taxonomy: true
            }, () => {
                this.filterDentist();
            });
        }
        else {
            taxonomies[name] = "";
            if (
                (taxonomies.general_dentist !== "") ===
                (taxonomies.endodontist !== "") ===
                (taxonomies.oral_and_maxillofacial_surgeon !== "") ===
                (taxonomies.orthodontist !== "") ===
                (taxonomies.pediatric_dentist !== "") ===
                (taxonomies.periodontist !== "") ===
                (taxonomies.prosthodontics !== "")
            ) {
                this.setState({
                    [name]: "", taxonomy: false
                }, () => {
                    this.filterDentist();
                });
            }
            else {
                this.setState({
                    [name]: "", taxonomy: true
                }, () => {
                    this.filterDentist();
                });
            }
        }
    }

    handleInputTextChange = name => event => {
        this.setState({
            [name]: event.target.value
        }, () => {
            this.filterDentist();
        })
    }

    handleGenderChange = (event) => {

        let name = event.target.name;
        let value = event.target.value;

        const { male, female } = this.state;
        let genders = { male, female };

        if (event.target.checked) {
            this.setState({
                [name]: value, gender: true
            }, () => {
                this.filterDentist();
            });
        }
        else {
            genders[name] = "";
            if ((genders.male !== "") === (genders.female !== "")) {
                this.setState({
                    [name]: "", gender: false
                }, () => {
                    this.filterDentist();
                });
            }
            else {
                this.setState({
                    [name]: "", gender: true
                }, () => {
                    this.filterDentist();
                });
                this.setState({})
            }
        }
    }

    filterDentist = () => {
        const {
            general_dentist,
            endodontist,
            oral_and_maxillofacial_surgeon,
            orthodontist,
            pediatric_dentist,
            periodontist,
            prosthodontics,
            searchResult, male, female, gender, taxonomy, zipCode, stateName, practiceName } = this.state;

        let filterData = searchResult.filter((element) => {
            return (
                (
                    taxonomy ===
                    (element.taxonomies[0].desc === general_dentist ||
                        element.taxonomies[0].desc === endodontist ||
                        element.taxonomies[0].desc === oral_and_maxillofacial_surgeon ||
                        element.taxonomies[0].desc === orthodontist ||
                        element.taxonomies[0].desc === pediatric_dentist ||
                        element.taxonomies[0].desc === periodontist ||
                        element.taxonomies[0].desc === prosthodontics)
                )
                &&
                element.basic.name.toLowerCase().indexOf(practiceName.toLowerCase()) !== -1
                &&
                element.addresses[0].state.toLowerCase().indexOf(stateName.toLowerCase()) !== -1
                &&
                element.addresses[0].city.toLowerCase().indexOf(stateName.toLowerCase()) !== -1
                &&
                element.addresses[0].postal_code.toLowerCase().indexOf(zipCode.toLowerCase()) !== -1
                &&
                (gender === (element.basic.gender === male || element.basic.gender === female))
            )
        })
        console.log({ filterData });
        this.setState({ filterData });
    }

    showHealthProvider = () =>{
        const { filterData } = this.state;
        this.setState({isShow: true}, () =>{
            this.props.updateFilterResult({
                results: filterData,
                result_count: filterData.length
            });

        })
    }

    render() {
        return (
            <Row>
                <Row type="flex">
                    <Col span={12} xs={23}>
                        <div className="check-box-container">
                            <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="general_dentist" value="Dentist General Practice"  >
                                <span className="check-box-text">General Dentist</span>
                            </Checkbox><br />
                            <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="endodontist" value="Endodontist">
                                <span className="check-box-text">Endodontist</span>
                            </Checkbox><br />
                            <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="oral_and_maxillofacial_surgeon" value="Dentist Oral and Maxillofacial Surgery">
                                <span className="check-box-text">Oral and Maxillofacial Surgeon</span>
                            </Checkbox><br />
                            <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="orthodontist" value="Orthodontist">
                                <span className="check-box-text">Orthodontist</span>
                            </Checkbox><br />
                        </div>
                    </Col>

                    <Col span={12} xs={23}>
                        <div className="check-box-container2">
                            <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="pediatric_dentist" value="Pediatric Dentist">
                                <span className="check-box-text">Pediatric Dentist</span>
                            </Checkbox><br />
                            <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="periodontist" value="Periodontist">
                                <span className="check-box-text">Periodontist</span>
                            </Checkbox><br />
                            <Checkbox className="check-box" onChange={this.handleTaxonomyChange} name="prosthodontics" value="Dentist Prosthodontics">
                                <span className="check-box-text">Prosthodontics </span>
                            </Checkbox>
                        </div>
                    </Col>
                </Row>

                <Row type="flex" justify="center">
                    <Col span={24}>
                        <div style={{ padding: '10px' }}>
                            <label><h5 style={{ color: '#AEB1B1' }}>HOSPITAL/PRACTICE NAME</h5></label>
                            <Input
                                placeholder="Search by business name"
                                onChange={this.handleInputTextChange("practiceName")}
                            />
                            <br />
                            <br />

                            <Col span={11}>
                                <div>
                                    <label><h5 style={{ color: '#AEB1B1' }}>CITY OR STATE</h5></label>
                                    <Input placeholder="e.g California" onChange={this.handleInputTextChange("stateName")} />
                                </div>
                            </Col>

                            <Col span={2}>
                            </Col>

                            <Col span={11}>
                                <div>
                                    <label><h5 style={{ color: '#AEB1B1' }}>ZIP CODE</h5></label>
                                    <Input placeholder="e.g California" onChange={this.handleInputTextChange("zipCode")} />
                                </div>
                            </Col>
                        </div>
                    </Col>
                </Row><br />

                <Row type="flex" justify="center">
                    <Col span={24}>
                        <h6 style={{ color: '#AEB1B1' }}>TYPE OF PATIENT SERVED</h6>
                        <div style={{ padding: '10px' }}>
                            <Checkbox style={{ marginBottom: '10px' }}>
                                <span className="check-box-text">Adults Only </span>
                            </Checkbox><br />
                            <Checkbox style={{ marginBottom: '10px' }}>
                                <span className="check-box-text">Both Adults and Children &  </span>
                            </Checkbox><br />
                            <Checkbox style={{ marginBottom: '10px' }}>
                                <span className="check-box-text">Children & Adolescents Only </span>
                            </Checkbox>
                        </div>
                    </Col>
                </Row>

                <Row type="flex" justify="center">
                    <Col span={24}>
                        <h6 style={{ color: '#AEB1B1' }}>GENDER OF HEALTHCARE PROVIDER</h6>
                        <div style={{ padding: '10px' }}>
                            <Checkbox
                                style={{ marginBottom: '10px' }}
                                name="female"
                                value="F"
                                onChange={this.handleGenderChange}
                            >
                                <span className="check-box-text">Female </span>
                            </Checkbox><br />
                            <Checkbox
                                style={{ marginBottom: '10px' }}
                                name="male"
                                value="M"

                                onChange={this.handleGenderChange}
                            >
                                <span className="check-box-text">Male </span>
                            </Checkbox>
                        </div>
                    </Col>
                </Row>

                <Row type="flex" justify="center">
                    <Col span={24}>
                        <div>
                            <Button className="button-style2" onClick={this.showHealthProvider}>
                                SHOW HEALTHCARE PROVIDERS ({this.state.filterData.length} RESULTS)
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        searchResult: state.searchReducer.data
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updateFilterResult: (data) =>dispatch(updateFilterResult(data))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Dentistry);

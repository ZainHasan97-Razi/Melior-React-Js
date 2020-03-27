import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { searchByState } from '../../Redux/Actions/searchActions';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';

class SearchByState extends Component {
    constructor(){
        super();
        this.state = {
            isState: false,
        }
    }

    handleClick = (state_name) => {
        this.setState({isState: true}, () =>{
            this.props.searchByState(state_name);
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchResult.result_count && this.state.isState) {
            this.props.history.push('search_result');
        }
    }
    render() {
        return (
            <Row type="flex" justify="center" className="search-by-state" >
                <Col span={22} >
                    <Row>
                        <h3 className="search-by-state-title">Search by State:</h3>
                    </Row>
                    <Row type="flex" justify="space-between">
                        <Col md={4} xs={8}>
                            <Row className="state-name">
                                <p onClick={() => this.handleClick("AL")}>Alabama</p>
                                <p onClick={() => this.handleClick("AK")}>Alaska</p>
                                <p onClick={() => this.handleClick("AZ")}>Arizona</p>
                                <p onClick={() => this.handleClick("AR")}>Arkansas</p>
                                <p onClick={() => this.handleClick("CA")}>California</p>
                                <p onClick={() => this.handleClick("CO")}>Colorado</p>
                                <p onClick={() => this.handleClick("CT")}>Connecticut</p>
                                <p onClick={() => this.handleClick("DE")}>Delaware</p>
                                <p onClick={() => this.handleClick("FL")}>Florida</p>
                                <p onClick={() => this.handleClick("GA")}>Georgia</p>
                            </Row>
                        </Col>
                        <Col md={4} xs={8}>
                            <Row className="state-name">
                                <p onClick={() => this.handleClick("ID")}>Idaho</p>
                                <p onClick={() => this.handleClick("IL")}>Illinois</p>
                                <p onClick={() => this.handleClick("IN")}>Indiana</p>
                                <p onClick={() => this.handleClick("IA")}>lowa</p>
                                <p onClick={() => this.handleClick("KS")}>Kansas</p>
                                <p onClick={() => this.handleClick("KY")}>Kentucky</p>
                                <p onClick={() => this.handleClick("LA")}>Louisiana</p>
                                <p onClick={() => this.handleClick("ME")}>Maine</p>
                                <p onClick={() => this.handleClick("MD")}>Maryland</p>
                                <p onClick={() => this.handleClick("MA")}>Massachusetts</p>
                            </Row>
                        </Col>
                        <Col md={4} xs={8}>
                            <Row className="state-name" >
                                <p onClick={() => this.handleClick("MN")}>Minnesota</p>
                                <p onClick={() => this.handleClick("MS")}>Mississippi</p>
                                <p onClick={() => this.handleClick("MO")}>Missouri</p>
                                <p onClick={() => this.handleClick("MT")}>Montana</p>
                                <p onClick={() => this.handleClick("NE")}>Nebraska</p>
                                <p onClick={() => this.handleClick("NV")}>Nevada</p>
                                <p onClick={() => this.handleClick("NH")}>New Hampshire</p>
                                <p onClick={() => this.handleClick("NJ")}>New Jersey</p>
                                <p onClick={() => this.handleClick("NM")}>New Mexico</p>
                                <p onClick={() => this.handleClick("NY")}>New York</p>
                            </Row>
                        </Col>
                        <Col md={4} xs={8}>
                            <Row className="state-name">
                                <p onClick={() => this.handleClick("ND")}>North Dakota</p>
                                <p onClick={() => this.handleClick("OH")}>Ohio</p>
                                <p onClick={() => this.handleClick("OK")}>Oklahoma</p>
                                <p onClick={() => this.handleClick("OR")}>Oregon</p>
                                <p onClick={() => this.handleClick("PA")}>Pennsylvania</p>
                                <p onClick={() => this.handleClick("PR")}>Puerto Rico</p>
                                <p onClick={() => this.handleClick("RI")}>Rhode Island</p>
                                <p onClick={() => this.handleClick("SC")}>South Carolina</p>
                                <p onClick={() => this.handleClick("SD")}>South Dakota</p>
                                <p onClick={() => this.handleClick("TN")}>Tennessee</p>
                                <p onClick={() => this.handleClick("TX")}>Texas</p>
                            </Row>
                        </Col>
                        <Col md={4} xs={8}>
                            <Row className="state-name">
                                <p onClick={() => this.handleClick("UT")}>Utah</p>
                                <p onClick={() => this.handleClick("VT")}>Vermont</p>
                                <p onClick={() => this.handleClick("VA")}>Virginia</p>
                                <p onClick={() => this.handleClick("WA")}>Washington</p>
                                <p onClick={() => this.handleClick("D.C.")}>Washington DC</p>
                                <p onClick={() => this.handleClick("WV")}>West Virginia</p>
                                <p onClick={() => this.handleClick("WI")}>Wisconsin</p>
                                <p onClick={() => this.handleClick("WY")}>Wyoming</p>
                                <p onClick={() => this.handleClick("ID")}>Idaho</p>
                                <p onClick={() => this.handleClick("MI")}>Michigan</p>
                                <p onClick={() => this.handleClick("NC")}>North Carolia</p>
                            </Row>
                        </Col>
                        <Col xs={8}>
                            <Row className="state-name">
                                <p></p>
                            </Row>
                        </Col>
                    </Row>    
                </Col>
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
        searchByState: (state_name) => dispatch(searchByState(state_name)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchByState);

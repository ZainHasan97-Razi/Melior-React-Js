import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Row, Col, Input, Button, Icon, Tabs, Select, Spin, Checkbox, Typography } from 'antd';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/Group24.svg";
// import State from './searchByState';
// import DentistryFilter from '../Dentistry';
// import { searchByProviderCategoryAndCity } from '../../Redux/Actions/searchActions';
// import { connect } from 'react-redux';
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



  render() {
    // const { cityName, providerCategory, hide } = this.state;
    return (
      <div>
        <Header {...this.props}/>
        <div className="provoder-list-body" id="vh100">
          <div style={{overflow:"auto"}}>

            <Row type="flex" justify="center" style={{marginTop:"100px", marginBottom:"50px"}}>
                <Col xxl={7} xl={8} lg={8} md={9} sm={14} xs={22} style={{backgroundColor:"rgb(168,168,168, 0.6)", borderRadius:20}}>
                  <Row type="flex" justify="center" style={{marginTop:20}}>
                    <img className="signup-logo" src={logo} alt="logo" />
                  </Row>
                <Row className="signup-box">
                  <Typography style={{fontSize:29, color:"black",opacity:0.6, marginBottom:"10px", width:"100%", textAlign:"center"}}>
                    Contact Us
                  </Typography>
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
                        placeholder="Email"
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
                        placeholder="Send us message"
                        onChange={(event) => this.handleChange("message", event)}
                        className="input-message"
                        prefix={
                          <Icon 
                          className="username-icon"
                          type="message" />
                        }
                    />
                    </Row>
                    <Row className="row-signup-button" type="flex" justify="center">
                      <Button className="signup-button" 
                      // onClick={(e) => this.handleClick(e)}
                      >Send</Button>
                    </Row>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return ({
//     searchResult: state.searchReducer.data,
//     isLoading: state.searchReducer.isLoading,
//   })
// }

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     searchByProviderCategoryAndCity: (city_name, providerCategory) => dispatch(searchByProviderCategoryAndCity(city_name, providerCategory))
//   })
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Search);
export default Search;
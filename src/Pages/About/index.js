import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Row, Col, Input, Button, Icon, Tabs, Select, Spin, Typography } from 'antd';
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
        <div className="provoder-list-body">
          <Row className="row-container">
              <div style={{overflow:"auto"}}>
              <Col >
            <Row type="flex" justify="center" style={{marginTop:"10%"}}>
                <Col style={{width:"80%",backgroundColor:"rgb(168,168,168, 0.4)", borderRadius:20}}>
                <Row lg={12} md={15} sm={20} xs={23}>
                    <Typography style={{fontSize:40, fontWeight:"normal", color:"rgb(85, 85, 221)", margin:"10px"}}>
                        About MeliorMD
                    </Typography>
                </Row>
                <Row lg={12} md={15} sm={20} xs={23}>
                    <Typography style={{fontSize:20, fontWeight:"normal", color:"#fff",margin:"10px"}}>
                        Hiring a doctor nowadays has become an uphill task. This is one such profession which 
                        involves the lives of people and thus the quality can never be compromised. A physician 
                        should not only be well qualified, but also well-experienced to deal with the requirements 
                        of all kinds of patients. Therefore, if you ever think “I need to hire a doctor”, take the 
                        help of a professional, experienced and dedicated service provider, which would be the single 
                        best resource for every kind of medical staffing. One such partner is our company, Alliance 
                        Recruitment Agency, which ensures, that every doctor you hire matches your requirements. 
                        The requirements are of two types, one which is personally needed by you, the other being the 
                        standard requirements from this noble profession. The physician should not only be professional 
                        and knowing his subject deeply, he should also be compassionate and sympathetic towards the 
                        patient and his ailments. It is told that a smiling doctor cures his patient fast.
                    </Typography>
                </Row>
                </Col>
            </Row>

            <Row type="flex" justify="center" style={{marginTop:"20px", marginBottom:"5%"}}>
                <Col style={{width:"80%",backgroundColor:"rgb(168,168,168, 0.4)", borderRadius:20}}>
                <Row lg={12} md={15} sm={20} xs={23}>
                    <Typography style={{fontSize:22, fontWeight:"bold", color:"#3B3B3B", margin:"10px"}}>
                        Why do Choose Alliance Recruitment Agency?
                    </Typography>
                </Row>
                <Row lg={12} md={15} sm={20} xs={23}>
                    <Typography style={{fontSize:20, fontWeight:"normal", color:"#fff",margin:"10px", marginTop:"0px"}}>
                    There are certain reasons which will prompt you to constantly choose Alliance Recruitment 
                    Agency, over the other staffing service providers. <br/>
                    <Icon type="check-circle" style={{color:"blue", marginRight:"5px"}} />We have a reputed client base, which has been 
                    always relied upon us to do their physician staffing. <br/>
                    <Icon type="check-circle" style={{color:"blue", marginRight:"5px"}} />The doctors hired by them, always meet up the 
                    standards set up by this noble profession. <br/> 
                    <Icon type="check-circle" style={{color:"blue", marginRight:"5px"}} />The doctors hired by our clients, render excellent 
                    services and you will always get positive feedback about them from many happy patients and their families.<br/>
                    <Icon type="check-circle" style={{color:"blue", marginRight:"5px"}} />Most of the doctors are very punctual. They do not take the service for granted and do not take advantage 
                    of the responsibility, they are entrusted with. <br/>
                    <Icon type="check-circle" style={{color:"blue", marginRight:"5px"}} />We also provide doctors who are willing to take longer 
                    assignments with you. Their backgrounds are cross verified thoroughly after checking their references.
                    </Typography>
                </Row>
                </Col>
            </Row>
            </Col>
              </div>
          </Row>
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
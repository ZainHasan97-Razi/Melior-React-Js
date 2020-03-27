import React, { Component } from 'react';
import { Row, Col, Button, Input, TimePicker, Radio, Checkbox, Icon, Typography} from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import 'antd/dist/antd.css';
import './index.css';

class AddProviderListing extends Component {
    constructor() {
        super();
        this.state={
            first_name: "",
            initial: "",
            last_name: "",
            gender: "",
            address: {
                num:"",
                street_no: "",
                suite: "",
                city: "",
                state: "",
                zip: "",
            },
            phone_no: "",
            email: "",
            medical_school: "",
            medical_school_year: "",
            residency_training: "",
            residency_training_year: "",
            certifice: [""],
            practice_info: {
                taxonomy_id: "",
                specialty: "",
                practice_name: "",
                 
            }
        }
    }

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <Row type="flex" justify="center">

                    <Col xxl={8} xl={9} lg={10} md={14} sm={18} xs={23}>
                        {/* ======== Form Row 1 ======== */}
                        <Row type="flex" className="provider-info-form">
                            <h2 className="provider-info-text">Providers Information</h2>
                        </Row>
                        {/* ======== Form Row 2 ======== */}
                        <Row type="flex" className="row-name">
                            <Col span={24}>
                                <h4>Provider Name</h4>
                            </Col>
                            <Col span={24}>
                                <Row type="flex">
                                    <Col className="input-name-col1" span={9}>
                                    <Input
                                        className="first-name"
                                        placeholder="First"
                                    />
                                    </Col>
                                    <Col className="input-name-col2" span={6}>
                                    <Input
                                        className="initial"
                                        placeholder="Initial"
                                    />
                                    </Col>
                                    <Col className="input-name-col3" span={9}>
                                    <Input
                                        className="last-name"
                                        placeholder="Last name"
                                    />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* ======== Form Row 3 ======== */}
                        <Row type="flex" className="row-radio-gender">
                            <Col span={24}>
                                <h4>Provider Gender</h4>
                            </Col>
                            <Col span={24}>
                                <Radio.Group>
                                    <Radio value="a">male</Radio>
                                    <Radio value="b">female</Radio>
                                </Radio.Group>
                            </Col>
                        </Row>
                        {/* ======== Form Row 4 ======== */}
                        <Row type="flex" className="row-address">
                            <Col span={24}>
                                <h4>Address</h4>
                            </Col>
                            <Col span={24}>
                                <Row type="flex">
                                    <Col className="input-address-col1" span={7}>
                                    <Input
                                        className="address-num"
                                        placeholder="Num"
                                    />
                                    </Col>
                                    <Col className="input-address-col2" span={10}>
                                    <Input
                                        className="address-street"
                                        placeholder="Street name"
                                    />
                                    </Col>
                                    <Col className="input-address-col3" span={7}>
                                    <Input
                                        className="address-suite"
                                        placeholder="Suite"
                                    />
                                    </Col>
                                    <Col className="input-address-col4" span={10}>
                                    <Input
                                        className="address-city"
                                        placeholder="City"
                                    />
                                    </Col>
                                    <Col className="input-address-col5" span={7}>
                                    <Input
                                        className="address-State"
                                        placeholder="State"
                                    />
                                    </Col>
                                    <Col className="input-address-col6" span={7}>
                                    <Input
                                        className="address-zip"
                                        placeholder="Zip"
                                    />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 4 ======== */}
                        <Row type="flex" className="row-phone-number">
                            <Col span={24}>
                                <h4>Phone number</h4>
                            </Col>
                            <Col  md={14} sm={14} xs={19} className="input-number-col">
                                <Row type="flex">
                                    <Input
                                        className="phone-number"
                                        placeholder="(123)456-7890"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 5 ======== */}
                        <Row type="flex" className="row-email">
                            <Col span={24}>
                                <h4>email</h4>
                            </Col>
                            <Col  md={13} sm={14} xs={19} className="input-email-col">
                                <Row type="flex">
                                    <Input
                                        className="email"
                                        placeholder="example@example.com"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 6 ======== */}
                        <Row type="flex" className="row-medical-school">
                            <Col span={19} className="medical-school-col">
                                <Row type="flex">
                                    <h4>Medical School</h4>
                                </Row>
                                <Row type="flex">
                                    <Input
                                        className="medical-school"
                                        placeholder="OHIO STATE UNIVERSITY COLLEGE OF MEDICINE & PUBLIC HEALTH"
                                    />
                                </Row>
                            </Col>
                            <Col span={5}>
                                <Row type="flex">
                                    <h4>Year<span className="year-star">*</span></h4>
                                </Row>
                                <Row type="flex">
                                    <Input
                                        className="medical-school-year"
                                        placeholder="1998"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 7 ======== */}
                        <Row type="flex" className="row-residency-training">
                            <Col span={16} className="residency-training-col">
                                <Row type="flex">
                                    <h4>Residency Training</h4>
                                </Row>
                                <Row type="flex">
                                    <Input
                                        className="residency-training"
                                        placeholder="MOFFITT HOSPITAL UNIVERSITY OF OF INTERNAL MEDICINE"
                                    />
                                </Row>
                            </Col>
                            <Col span={5}>
                                <Row type="flex">
                                    <h4>Year<span className="year-star">*</span></h4>
                                </Row>
                                <Row type="flex">
                                    <Input
                                        className="residency-training-year"
                                        placeholder="1998"
                                    />
                                </Row>
                            </Col>
                            <Col span={2} style={{
                                            marginLeft: 10,
                                            paddingTop: 35,
                                            borderWidth: 2,
                                            borderColor: "black",
                                            justifyContent: "center",
                                            cursor: "pointer"
                                        }}>
                                            {/* onClick={() => this.addCertificate()} */}
                                        <Icon type="plus-circle" />
                                    </Col>    
                        </Row>
                        {/*========== Form Row 8 ======== */}
                        <Row type="flex" className="row-american-board">
                            <Col span={24}>
                                <h4>American Board of Medical Specialties Certification</h4>
                            </Col>
                            <Col  md={19} sm={20} xs={24} className="american-board-col" >
                                <Row type="flex">
                                    <Col>
                                        <Input
                                            className="american-board"
                                            placeholder="Urology"
                                        />
                                    </Col>
                                    <Col  style={{
                                            marginLeft: 10,
                                            paddingTop: 8,
                                            borderWidth: 2,
                                            borderColor: "black",
                                            justifyContent: "center",
                                            cursor: "pointer"
                                        }}>
                                            {/* onClick={() => this.addCertificate()} */}
                                        <Icon type="plus-circle" />
                                    </Col>                                    
                                </Row>
                            </Col>
                        </Row>
                        {/* ======== Form Row 9 ======== */}
                        <Row type="flex" className="provider-info-form">
                            <h2 className="provider-info-text">Practice Information</h2>
                        </Row>
                        {/*========== Form Row 10 ======== */}
                        <Row type="flex" className="row-taxonomy-id">
                            <Col span={24}>
                                <h4>Taxonomy ID</h4>
                            </Col>
                            <Col md={13} sm={14} xs={17} className="taxonomy-id-col" >
                                <Row type="flex">
                                    <Input
                                        className="taxonomy-id"
                                        placeholder="sample text"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 11 ======== */}
                        <Row type="flex" className="row-specialty">
                            <Col span={24}>
                                <h4>Specialty</h4>
                            </Col>
                            <Col md={13} sm={14} xs={17} className="specialty-col" >
                                <Col  md={22} sm={22} xs={22}>
                                    <Input
                                        className="specialty"
                                        placeholder="dentist, physician and other"
                                    />
                                </Col>
                                <Col span={1}  style={{
                                            marginLeft: 10,
                                            paddingTop: 8,
                                            borderWidth: 2,
                                            borderColor: "black",
                                            justifyContent: "center",
                                            cursor: "pointer"
                                        }}>
                                            {/* onClick={() => this.addCertificate()} */}
                                        <Icon type="plus-circle" />
                                    </Col>    
                            </Col>
                            <Col md={13} sm={14} xs={17} className="specialty-col" >
                                <Col  md={22} sm={22} xs={22}>
                                    <Input
                                        className="specialty"
                                        placeholder="dentist, physician and other"
                                    />
                                </Col>
                                <Col span={1}  style={{
                                            marginLeft: 10,
                                            paddingTop: 8,
                                            borderWidth: 2,
                                            borderColor: "black",
                                            justifyContent: "center",
                                            cursor: "pointer"
                                        }}>
                                            {/* onClick={() => this.addCertificate()} */}
                                        <Icon type="plus-circle" />
                                    </Col>    
                            </Col>
                        </Row>
                        {/*========== Form Row 12 ======== */}
                        <Row type="flex" className="row-practice-name">
                            <Col span={24}>
                                <h4>Practice name</h4>
                            </Col>
                            <Col md={13} sm={14} xs={17} className="practice-name-col" >
                                <Row type="flex">
                                    <Input
                                        className="practice-name"
                                        placeholder="sample text"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/*========== Form Row 13 ======== */}
                        <Row type="flex" className="row-health-insurance">
                            <Col span={24}>
                                <h4>Healthcare Insurance Accepted</h4>
                            </Col>
                            <Col span={22} className="health-insurance-col" >
                                <Row type="flex">
                                    <Input
                                        className="health-insurance"
                                        placeholder="sample text"
                                    />
                                </Row>
                            </Col>
                            <Col span={1}  style={{
                                            marginLeft: 10,
                                            paddingTop: 8,
                                            borderWidth: 2,
                                            borderColor: "black",
                                            justifyContent: "center",
                                            cursor: "pointer"
                                        }}>
                                            {/* onClick={() => this.addCertificate()} */}
                                        <Icon type="plus-circle" />
                                    </Col>  
                        </Row>
                        {/*========== Form Row 14 ======== */}
                        <Row type="flex" className="row-health-insurance2">
                            <Col span={24}>
                                <h4>Healthcare Insurance Accepted 2</h4>
                            </Col>
                            <Col md={13} sm={14} xs={17} className="health-insurance2-col" >
                                <Row type="flex">
                                    <Input
                                        className="health-insurance2"
                                        placeholder="sample text"
                                    />
                                </Row>
                            </Col>
                        </Row>
                        {/* ======== Form Row 15 ======== */}
                        <Row type="flex" className="row-radio-accept-patient">
                            <Col span={24}>
                                <h4>Accepts New Patient</h4>
                            </Col>
                            <Col span={24}>
                                <Radio.Group>
                                    <Radio value="a">Yes</Radio>
                                    <Radio value="b">No</Radio>
                                </Radio.Group>
                            </Col>
                        </Row>
                        {/* ======== Form Row 16 ======== */}
                        <Row type="flex" className="row-patient-type">
                            <Col span={24}>
                                <h4>Patient Type</h4>
                            </Col>
                            <Col span={24}>
                                <Row type="flex">
                                    <Checkbox>Infant</Checkbox>
                                    <Checkbox>Children</Checkbox>
                                </Row>
                                <Row type="flex">
                                    <Checkbox>Adult</Checkbox>
                                    <Checkbox>Elderly</Checkbox>
                                </Row>
                            </Col>
                        </Row>
                        {/* ======== Form Row 17 ======== */}
                        <Row type="flex" className="row-office-hours">
                            <Col span={24}>
                                <h4>Office hours</h4>
                            </Col>
                            <Col span={24}>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col md={6} sm={6} xs={24}>
                                        <Checkbox>Sunday</Checkbox>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col md={6} sm={6} xs={24}>
                                        <Checkbox>Monday</Checkbox>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col md={6} sm={6} xs={24}>
                                        <Checkbox>Tuesday</Checkbox>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col md={6} sm={6} xs={24}>
                                        <Checkbox>Wednesday</Checkbox>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col md={6} sm={6} xs={24}>
                                        <Checkbox>Thursday</Checkbox>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col md={6} sm={6} xs={24}>
                                        <Checkbox>Friday</Checkbox>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                                <Row type="flex" className="row-select-office-hours">
                                    <Col md={6} sm={6} xs={24}>
                                        <Checkbox>Saturday</Checkbox>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography>From</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                    <Col md={2} sm={2} xs={3}>
                                        <Typography style={{textAlign:'center'}}>To</Typography>
                                    </Col>
                                    <Col md={7} sm={7} xs={9}>
                                        <TimePicker placeholder="select" className="time-picker" size="small"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* ======== Form Row 18 ======== */}
                        <Row type="flex" justify="center" className="row-submit-button">
                            <Button className="submit-button">Submit<Icon type="arrow-right" /></Button>
                        </Row>
                    </Col>

                </Row>
                <Footer/>
            </div>
        )
    }
}


export default AddProviderListing;
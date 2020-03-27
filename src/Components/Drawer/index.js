import React, { Component } from 'react'
import { Drawer, Col, Row, Icon } from 'antd';
import './index.css';
import { Link } from 'react-router-dom';

class CustomDrawer extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>

        <Icon type="menu"  className="drawer-button" onClick={this.showDrawer}/>
    
        <Drawer
          title="Menu"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Row type="flex" justufy="left" className="drawer">
            <Col span={24}>
              <Row className="sidebar-tabs">
                <p className="links">About</p>
              </Row>
              <Row className="sidebar-tabs">
                <p className="links">Directory</p>
              </Row>
              <Row className="sidebar-tabs">
                <p className="links">Contact Us</p>
              </Row>
              <Row className="sidebar-tabs">
                <Link to="/add_provider_listing"><p className="links">Add Prvider List</p></Link>
              </Row>
              <Row className="sidebar-tabs">
                <Link to="/login"><p className="links">Prvider Login</p></Link>
              </Row>
            </Col>
          </Row>
        </Drawer>
      </div>
    );
  }
}

export default CustomDrawer;
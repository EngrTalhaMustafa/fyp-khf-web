import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './footer.css';
import { Row, Col, Card } from 'antd';
import fblogo from '../../fb-logo.png';
import whatsapplogo from '../../whatsapp-logo.png';
const { Header, Content, Footer } = Layout;




export default class footer extends React.Component {

    render() {
        return (
            <div>
                <Footer id="footer" style={{ textAlign: 'center' }}>
                    <Row type="flex" id="first-row">
                        <Col style={{ backgroundColor: "", padding: '5px' }} xl={8} lg={8} md={8} sm={8} xs={24}>
                            <Card title="Contact Us" bordered={false}>
                                <h3 className="footerText">+92-3178947319</h3>
                                <h3 className="footerText">talhamustafa9999@gmail.com</h3>
                                <h3 className="footerText">Korangi # 1, Sec 32/a , House 1218.</h3>
                                <h3 className="footerText">Karachi.</h3>
                            </Card>
                        </Col>
                        <Col style={{ backgroundColor: "", padding: '5px' }} xl={8} lg={8} md={8} sm={8} xs={24}>
                            <Card title="Join Us" bordered={false}>
                                <a href="https://google.com" target="_blank"><img src={fblogo} width="40px" height="40px"/></a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://google.com" target="_blank"><img src={whatsapplogo} width="40px" height="40px"/></a>
                            </Card>
                        </Col>
                        <Col style={{ backgroundColor: "", padding: '5px' }} xl={8} lg={8} md={8} sm={8} xs={24}>
                            <Card title="Apps" bordered={false}>
                                Apps
                            </Card>
                        </Col>
                    </Row>
                    <Row type="flex" id="second-row">
                        <Col>
                            <h3>

                            </h3>
                        </Col>
                    </Row>
                </Footer>
            </div>
        )
    }
}

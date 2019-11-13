import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './footer.css';
import { Row, Col, Card } from 'antd';
const { Header, Content, Footer } = Layout;




export default class footer extends React.Component {

    render() {
        return (
            <div>
                <Footer id="footer" style={{ textAlign: 'center' }}>
                    <Row type="flex" id="first-row">
                        <Col style={{ backgroundColor: "yello", padding: '5px' }} xl={8} lg={8} md={8} sm={8} xs={24}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col style={{ backgroundColor: "green", padding: '5px' }} xl={8} lg={8} md={8} sm={8} xs={24}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col style={{ backgroundColor: "brown", padding: '5px' }} xl={8} lg={8} md={8} sm={8} xs={24}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    </Row>
                    <Row type="flex" id="second-row">

                    </Row>
                </Footer>
            </div>
        )
    }
}

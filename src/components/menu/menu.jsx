import React from 'react';
import { Tabs ,Row, Col, Card } from 'antd';
import './menu.css';
const { Meta } = Card;
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }
export default class Menu extends React.Component {
    render() {

        return (
            <div id="root" style={{ textAlign: 'center' }}>
                <h1 id="heading">Our Delicious Menu</h1>
                {/* <Row id="mainRow" type="flex"> */}

                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Lunch" key="1">

                            <Card
                                hoverable
                                // style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>

                        </TabPane>
                        <TabPane tab="Dinner" key="2">
                            <Card
                                hoverable
                                // style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>

                        </TabPane>
                        <TabPane tab="Breakfast" key="3">
                        <Card
                            hoverable
                            // style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>

                        </TabPane>
                    </Tabs>


                     {/* <Col xl={8} lg={8} md={8} sm={10} xs={21}>
                         <Card
                            hoverable
                            // style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col xl={8} lg={8} md={8} sm={10} xs={21}>
                        <Card
                            hoverable
                            // style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col> */}
                {/* </Row> */}
            </div>
        )
    }
}
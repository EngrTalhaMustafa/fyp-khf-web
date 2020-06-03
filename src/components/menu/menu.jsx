import React from 'react';
import { Icon,List, Skeleton, Avatar, Tabs, Row, Col, Card } from 'antd';
import './menu.css';
import { connect } from 'react-redux';
import Moment from 'moment';
import PropTypes from 'prop-types';
const { Meta } = Card;
const { TabPane } = Tabs;
Icon.setTwoToneColor('#d70f64');
function callback(key) {
    console.log(key);
}
class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.day = (new Date().getDay()).toString()
        this.todaysMenu = {};
    }

    render() {
        this.todaysMenu = this.props.menus && this.props.menus[this.day.toString()];
        console.log(this.todaysMenu)
        return (
            <div id="root" style={{ textAlign: 'center' }}>
                <h1 id="heading">Our Delicious Menu</h1>
                {/* <Row id="mainRow" type="flex"> */}

                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Lunch" key="1">

                        <Card
                            hoverable
                        >
                            <List
                                itemLayout="horizontal"
                                dataSource={this.todaysMenu && this.todaysMenu.Lunch}
                                renderItem={item => (
                                    <List.Item
                                    actions={[<a key="list-loadmore-edit">
                                    <Icon 
                                    style={{ fontSize: '22px', color: '#d70f64 !important' }}
                                     onClick={()=>{alert(1)}} type="smile" theme="twoTone" />
                                   
                                    </a>,
                                    <a>
                                    <Icon 
                                    style={{ fontSize: '25px', color: '#d70f64 !important' }}
                                    onClick={()=>{alert(1)}}
                                    type="shopping-cart" />
                                    </a>]}>

                                        <List.Item.Meta
                                            avatar={<Avatar src={item.imageURL} />}
                                            title={item.name}
                                            description={`Quantity ${item.quantityPerUnit}`}
                                            
                                        /><br/>
                                        <h3>{`${item.price} pkr/- `}</h3>
                                    </List.Item>
                                
                                )}
                            />
                        </Card>

                    </TabPane>
                    <TabPane tab="Dinner" key="2">
                        <Card
                            hoverable
                        >
                                                            <List
                                itemLayout="horizontal"
                                dataSource={this.todaysMenu && this.todaysMenu.Dinner}
                                renderItem={item => (
                                    <List.Item
                                    actions={[<a key="list-loadmore-edit">
                                    <Icon 
                                    style={{ fontSize: '22px', color: '#d70f64 !important' }}
                                     onClick={()=>{alert(1)}} type="smile" theme="twoTone" />
                                   
                                    </a>,
                                    <a>
                                    <Icon 
                                    style={{ fontSize: '25px', color: '#d70f64 !important' }}
                                    onClick={()=>{alert(1)}}
                                    type="shopping-cart" />
                                    </a>]}
                                    >

                                        <List.Item.Meta
                                            avatar={<Avatar src={item.imageURL} />}
                                            title={item.name}
                                            description={`Quantity ${item.quantityPerUnit}`}
                                            
                                        /><br/>
                                        <h3>{`${item.price} pkr/- `}</h3>
                                    </List.Item>
                                
                                )}
                            />

                        </Card>

                    </TabPane>
                    <TabPane tab="Breakfast" key="3">
                        <Card
                            hoverable
                        >
                                                    <List
                                itemLayout="horizontal"
                                dataSource={this.todaysMenu && this.todaysMenu.Breakfast}
                                renderItem={item => (
                                    <List.Item
                                    actions={[<a key="list-loadmore-edit">
                                    <Icon 
                                    style={{ fontSize: '22px', color: '#d70f64 !important' }}
                                     onClick={()=>{alert(1)}} type="smile" theme="twoTone" />
                                   
                                    </a>,
                                    <a>
                                    <Icon 
                                    style={{ fontSize: '25px', color: '#d70f64 !important' }}
                                    onClick={()=>{alert(1)}}
                                    type="shopping-cart" />
                                    </a>]}
                                    >
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.imageURL} />}
                                            title={item.name}
                                            description={`Quantity ${item.quantityPerUnit}`}
                                            
                                        /><br/>
                                        <h3>{`${item.price} pkr/- `}</h3>
                                    </List.Item>
                                
                                )}
                            />

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
                <br /><br /><br /><br />
            </div>
        )
    }
}
Menu.prototypes = {
    menu: PropTypes.object
}
const mapStateToProps = (state) => {

    return {
        menu: state.menu
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (obj) => { dispatch({ type: "ADD_ITEM_TO_CART", payload: obj }) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);

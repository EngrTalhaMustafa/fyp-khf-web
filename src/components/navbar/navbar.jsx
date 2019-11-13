import React from "react";
import { Layout, Menu, Breadcrumb, Col, Drawer } from 'antd';
import './navbar.css'
import logo from '../../index.jpg'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Users from '../../users'
import Contact from '../../contact'
import users from "../../users";
import App from "../../App";
import { withRouter } from 'react-router-dom'
import { tsImportEqualsDeclaration } from "@babel/types";
const { Header, Content, Footer } = Layout;

class navbar extends React.Component {
    handleNav = () => {
        this.props.history.push('/contact')
    }



    state = {order : {
        day: '',
        time: '',
        dishes: []
    },visibleDrawer: false, visibleFirstChildDrawer: false, visibleSecondChildDrawer: false };

    showDrawer = () => {
        if (!localStorage.getItem('order')) {
            let order = {
                day: '',
                time: '',
                dishes: []
            }
            this.setState({
                visibleDrawer: true,
                order
            })
        }
        this.setState({
            visibleDrawer: true,
        });
    };

    showFirstChildDrawer = (day) => {
        console.log(day);
        let order = this.state.order;
        order.day = day;

        this.setState({
            visibleFirstChildDrawer: true,
            order,
        });
    }

    showSecondChildDrawer = (time) => {
        console.log(time);
        let order = this.state.order;
        order.time = time;
        this.setState({
            visibleSecondChildDrawer: true,
            visibleFirstChildDrawer: false,
            visibleDrawer: false,
            order,
        });
    }

    menu = {
        SATURDAY: {
            Breakfast: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
            Lunch: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],
            Dinner: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],
        },
        SUNDAY: {
            Breakfast: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
            Lunch: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],
            Dinner: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

        },
        MONDAY: {
            Breakfast: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
            Lunch: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],
            Dinner: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

        },
        TUESDAY: {
            Breakfast: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
            Lunch: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],
            Dinner: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

        },
        WEDNESDAY: {
            Breakfast: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
            Lunch: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],
            Dinner: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

        },
        THURSDAY: {
            Breakfast: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
            Lunch: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],
            Dinner: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

        },
        FRIDAY: {
            Breakfast: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
            Lunch: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],
            Dinner: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

        }
    }

    getDishes = () => {
        if(this.state.order.day && this.state.order.time){

       let day = this.state.order.day;
        let time= this.state.order.time;
        console.log(day,time)
        if(this.menu[day][time]){
            // alert(this.menu[day][time])
            console.log('retruening',this.menu[day][time])
            return this.menu[day][time];
            // return []
    }}
    else {
        // console.log(this.menu.day.time)
        // alert(1)
        return []
    }
}

    onClose = () => {
        this.setState({
            visibleDrawer: false,
            visibleFirstChildDrawer: false,
            visibleSecondChildDrawer: false,
        });
    };

    backToDrawer = () => {
        this.setState({
            visibleFirstChildDrawer: false,
            visibleDrawer: true,
        })
    }

    backToFirstChildDrawer = () => {
        this.setState({
            showSecondChildDrawer: false,
            visibleFirstChildDrawer: true,
        })
    }

    days = ['SUNDAY',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY'];

    render() {

        return (
            <div>
                <Header style={{ textAlign: 'center', backgroundColor: '#D70F64', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}>
                    <Col style={{ height: '62px' }} xl={2} lg={2} xs={0}>
                        <div className="logo"><img style={{ verticalAlign: 'top', width: '57%', height: '80%' }} src={logo} /></div>
                    </Col>
                    <Menu
                        // theme="dark"
                        mode="horizontal"
                        className="menu"
                        defaultSelectedKeys={['2']}
                    >

                        <Menu.Item style={{ marginLeft: '-6%' }} key="1"><Link to="/home">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/order-now' />Order Now</Menu.Item>
                        <Menu.Item key="3"><Link to='/chief-registration' />Become A Master Cheif</Menu.Item>
                        <Menu.Item key="4"><Link to='/rider-registration' />Become A Master Rider</Menu.Item>
                        <Menu.Item key="5" onClick={this.showDrawer}>Menu</Menu.Item>
                    </Menu>
                </Header>
                <div>

                    <Drawer
                        id="drawer"
                        title="Days"
                        placement="right"
                        closable={true}
                        onClose={this.onClose}
                        visible={this.state.visibleDrawer}
                    >
                        {
                            this.days.map(e => {
                                return <p key={e} onClick={this.showFirstChildDrawer.bind(this, e)}   >{e}</p>
                            })
                        }
                        <Drawer
                            id="firstChildDrawer"
                            title="Meal Time"
                            placement="right"
                            closable={true}
                            onClose={this.onClose}
                            visible={this.state.visibleFirstChildDrawer}
                        >
                            <p key={'breakfast'} onClick={this.showSecondChildDrawer.bind(this, 'Breakfast')}>Breakfast</p>
                            <p key={'lunch'} onClick={this.showSecondChildDrawer.bind(this, 'Lunch')}>Lunch</p>
                            <p key={'dinner'} onClick={this.showSecondChildDrawer.bind(this, 'Dinner')}>Dinner</p>

                            <Drawer
                                id="secondChildDrawer"
                                title="Dishes"
                                placement="right"
                                closable={true}
                                onClose={this.onClose}
                                visible={this.state.visibleSecondChildDrawer}
                            >
                                {

                                    this.getDishes().map(dish => {
                                       console.log(dish);
                                        return (
                                            <div key={this.state.order.day.concat(dish.name)}>
                                            
                                            <p>{dish.name}</p>
                                            <p>{dish.price}</p>
                                            <p><button>+</button></p>
                                            </div>)
                                    })


                                }

                            </Drawer>
                        </Drawer>

                    </Drawer>
                </div>
            </div>
        )
    }

}

export default (navbar)

                  



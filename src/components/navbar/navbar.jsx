import React from "react";
import { Modal, Alert, Button, Popover, Layout, Menu, Breadcrumb, Col, Drawer } from 'antd';
import './navbar.css'
import logo from '../../index.jpg'
import newlogo from '../../icon-1.png';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Users from '../../users'
import Contact from '../../contact'
import users from "../../users";
import App from "../../App";
import { withRouter } from 'react-router-dom'
import Moment from 'moment';
import connected from "rc-menu/lib/MenuItem";
import {connect} from 'react-redux';
const { Header, Content, Footer } = Layout;

class navbar extends React.Component {
    handleNav = () => {
        this.props.history.push('/contact')
    }

    constructor(props) {
        super(props);
        this.state = {
            order: {
                day: '',
                time: '',
                dishes: []
            },
            // menu: props.menu,
            visibleDrawer: false, visibleFirstChildDrawer: false, visibleSecondChildDrawer: false
        };
    }
    
    showDrawer = () => {
        console.log(this.props,this.state)

            if (!localStorage.getItem(Moment().format("MMM Do YY"))) {
                let order = {
                    day: '',
                    time: '',
                    dishes: [],
                    // date:Moment().format("MMM Do YY"), 
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


        addToCard = (dish) => {
            let orderForLater = this.state.order.day != Moment().format('dddd').toUpperCase() && this.getCurrentShift != this.state.order.time
            if (orderForLater) {
                this.showSignupAlert()
            }
            else {
                // console.log('order for now')
                this.props.addItemToCart(dish);

            }
        }


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
                BREAKFAST: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
                LUNCH: [{ name: 'DAL', price: 60 }, { name: 'CHAWAL', price: 60 }, { name: 'MANCHORIAN RICE', price: 200 }],
                DINNER: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],
            },
            SUNDAY: {
                BREAKFAST: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
                LUNCH: [{ name: 'DAL', price: 60 }, { name: 'CHAWAL', price: 60 }, { name: 'MANCHORIAN RICE', price: 200 }],
                DINNER: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

            },
            MONDAY: {
                BREAKFAST: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
                LUNCH: [{ name: 'DAL', price: 60 }, { name: 'CHAWAL', price: 60 }, { name: 'MANCHORIAN RICE', price: 200 }],
                DINNER: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

            },
            TUESDAY: {
                BREAKFAST: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
                LUNCH: [{ name: 'DAL', price: 60 }, { name: 'CHAWAL', price: 60 }, { name: 'MANCHORIAN RICE', price: 200 }],
                DINNER: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

            },
            WEDNESDAY: {
                BREAKFAST: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
                LUNCH: [{ name: 'DAL', price: 60 }, { name: 'CHAWAL', price: 60 }, { name: 'MANCHORIAN RICE', price: 200 }],
                DINNER: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

            },
            THURSDAY: {
                BREAKFAST: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
                LUNCH: [{ name: 'DAL', price: 60 }, { name: 'CHAWAL', price: 60 }, { name: 'MANCHORIAN RICE', price: 200 }],
                DINNER: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

            },
            FRIDAY: {
                BREAKFAST: [{ name: 'PARATHA', price: 20 }, { name: 'KABAB', price: 30 }, { name: 'KABAB ROLL', price: 50 }],
                LUNCH: [{ name: 'DAL', price: 60 }, { name: 'CHAWAL', price: 60 }, { name: 'MANCHORIAN RICE', price: 200 }],
                DINNER: [{ name: '', price: '' }, { name: '', price: '' }, { name: '', price: '' }],

            }
        }

        getDishes = () => {
            if (this.state.order.day && this.state.order.time) {

                let day = this.state.order.day;
                let time = this.state.order.time;
                console.log("------",time)
                let dayToId = {
                    MONDAY: 1,
                    TUESDAY: 2,
                    WEDNESDAY: 3,
                    THURSDAY: 4,
                    FRIDAY: 5,
                    SATURDAY: 6,
                    SUNDAY: 7
                }
                console.log(this.props.menu)
                const dayID = dayToId[day];
                const timeShift = time.slice(0,1).concat(time.slice(1).toLowerCase());
                console.log(dayID, timeShift)
                if (this.props.menu[dayID][timeShift]) {
                    console.log('retruening', this.props.menu[dayID][timeShift])
                    return this.props.menu[dayID][timeShift];
                }
            }
            else {
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



        showSignupAlert = () => {
            Modal.info({
                title: 'Do You Want To Order For Later? Signup Now!',
                content: '',
                okText: 'Signup Now!',
                onOk() {
                    console.log('going to signup page')
                },
            });
        }



        getCurrentShift = () => {
            let currentTime = parseInt(Moment().startOf('day').fromNow().slice(0, 2));
            if (currentTime <= 10) {
                return 'BREAKFAST';
            }
            else if (currentTime > 10 && currentTime <= 15) {
                return 'LUNCH';
            }
            else if (currentTime >= 18 && currentTime <= 21) {
                return 'DINNER';
            }
            else {
                return '';
            }
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
                            <div className="logo"><img style={{ verticalAlign: 'top', width: '57%', height: '80%' }} src={newlogo} /></div>
                        </Col>
                        <Menu
                            // theme="dark"
                            mode="horizontal"
                            className="menu"
                            defaultSelectedKeys={['2']}
                        >

                            <Menu.Item style={{ marginLeft: '-6%' }} key="1"><Link to="/home">Home</Link></Menu.Item>
                            {/* <Menu.Item key="2"><Link to='/order-now' />Order Now</Menu.Item> */}
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
                                    return <p style={{ color: e == Moment().format('dddd').toUpperCase() ? 'blue' : '' }} key={e} onClick={this.showFirstChildDrawer.bind(this, e)}   >{e}</p>
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
                                {console.log(Moment().startOf('day').fromNow())}
                                <p style={{ color: parseInt(Moment().startOf('day').fromNow().slice(0, 2)) < 10 && this.state.order.day == Moment().format('dddd').toUpperCase() ? 'blue' : '' }} key={'breakfast'} onClick={this.showSecondChildDrawer.bind(this, 'BREAKFAST')}>Breakfast</p>
                                <p style={{ color: parseInt(Moment().startOf('day').fromNow().slice(0, 2)) > 10 && parseInt(Moment().startOf('day').fromNow().slice(0, 2)) <= 15 && this.state.order.day == Moment().format('dddd').toUpperCase() ? 'Blue' : '' }} key={'LUNCH'} onClick={this.showSecondChildDrawer.bind(this, 'LUNCH')}>Lunch</p>
                                <p style={{ color: parseInt(Moment().startOf('day').fromNow().slice(0, 2)) >= 18 && parseInt(Moment().startOf('day').fromNow().slice(0, 2)) <= 21 && this.state.order.day == Moment().format('dddd').toUpperCase() ? 'Blue' : '' }} key={'DINNER'} onClick={this.showSecondChildDrawer.bind(this, 'DINNER')}>Dinner</p>

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
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }} key={this.state.order.day.concat(dish.name)}>

                                                    <p style={{ width: '100px' }}>{dish.name}</p>
                                                    <p>{dish.price}</p>
                                                    <p><button
                                                        onClick={
                                                            this.addToCard.bind(this, dish)
                                                        }

                                                    >+
                                                </button></p>
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
    export default connect(mapStateToProps, mapDispatchToProps)(navbar);




import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select, Input, Form, List, Row, Col, Card, Button } from 'antd';
import TextInput from '../form-components/text-input';
import SelectField from '../form-components/select-field';
import areas from '../../city-area'
import api from '../../api';
import '../../App.css';
import Swal from 'sweetalert2';

const { Option } = Select;
const { TextArea } = Input;

const layout = {
    labelCol: {
        xl: {
            span: 6,
            offset: 0,
        }, lg: {
            span: 6,
            offset: 0,
        }, md: {
            span: 6,
            offset: 0,
        }, sm: {
            span: 12,
            offset: 0,
        }, xs: {
            span: 12,
            offset: 0,
        }
    },
    wrapperCol: {
        xl: {
            span: 12,
            offset: 0,
        }, lg: {
            span: 12,
            offset: 0,
        }, md: {
            span: 12,
            offset: 0,
        }, sm: {
            span: 12,
            offset: 0,
        }, xs: {
            span: 12,
            offset: 0,
        }
    }
}

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            areas: [],
            formControls: {
                fullName: {
                    placeholder: 'Shaista Khan',
                    value: '',
                },
                contactNumber: {
                    placeholder: '03158128589',
                    value: '',
                },
                area: {
                    value: '',
                },
                city: {
                    name: 'Karachi',
                    value: 1
                },
                deliveryAddress: {
                    placeholder: '',
                    value: '',
                },
                specialInstructions: {
                    placeholder: '',
                    value: '',
                }
            },
            user: this.props.user,
            cart: this.props.cart
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const order = {
            customer_name: this.state.formControls.fullName.value,
            phone_no: this.state.formControls.contactNumber.value,
            address: this.state.formControls.deliveryAddress.value,
            city_id: this.state.formControls.city.value,
            area: this.state.formControls.area.value,
            status: 'Pending',
            special_instructions: this.state.formControls.specialInstructions.value,
        }
        api.post('/customer/order', { order, orderItems: this.state.cart.items.map(e => { return { menu_item_id: e.menu_item_id, quantity: e.quantity, price: e.price } }) }).then(res => {
            this.props.clearCart();
              Swal.fire({
                icon: 'success',
                title: 'Order Submited Sucessfully!',
                text: 'We will contact you shortly!',
                showConfirmButton: false,
                timer: 3500
              });
              this.props.history.push('/')
        })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something Went Wrong!',
                    text: e,
                    showConfirmButton: false,
                    timer: 3500
                  });
                console.log(e)
            })
    }

    changeHandler = event => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value: value
                },
            }
        });
    }

    areaChangeHandler = (event) => {
        console.log(event);
        this.setState({
            formControls: {
                ...this.state.formControls,
                'area': {
                    ...this.state.formControls.area,
                    value: event
                },
            }
        });
    }

    areaSearch = () => { }

    async componentDidMount() {
        try {
            const cities = await api.get('/cities');
            console.log("cities", cities)
            this.setState({
                cities: cities.data.data.map(e => { return { name: e.name, value: e.id } }),
                areas: Object.entries(areas['karachi']).map(e => e[1])
            })
        } catch (error) {
            console.log('error: ', error);
        }
    }

    render() {
        let mainBox = this.state.cart && this.state.cart.items.length > 0 ?
            <div>
                <Card
                    bordered={false}
                    style={{
                        maxWidth: '100%', width: '100vw',
                        background: 'red',
                        padding: '30px'
                    }}

                >
                    <Row type="flex" justify="space-between">
                        <Col xs={20} sm={20} md={10} lg={10} xl={8} style={{ marginBottom: '30px' }}>
                            <List
                                header={<div><Row type="flex" justify="space-between"><Col>Items</Col><Col>Quantity</Col><Col>Price</Col></Row></div>}
                                footer={<div>
                                    <Row type="flex" justify="space-between" >
                                        <Col>Total</Col>
                                        <Col>{this.state.cart.total}</Col>

                                    </Row>
                                </div>}
                                bordered
                                dataSource={this.state.cart.items}
                                renderItem={item => <List.Item>

                                    <Row type="flex" justify="space-between" style={{ width: '100%' }} >
                                        <Col>{item.name}</Col><Col>{item.quantity}</Col><Col>{item.price}</Col>
                                    </Row>
                                </List.Item>}
                            />
                        </Col>
                        <Col xs={20} sm={20} md={12} lg={12} xl={14}>
                            <Form
                                {...layout} name="checkout" layout="vertical" onSubmit={this.submitHandler}>
                                <Form.Item label="Full Name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <TextInput name="fullName" placeholder={this.state.formControls.fullName.placeholder}
                                        value={this.state.formControls.fullName.value}
                                        onChange={this.changeHandler}
                                    />
                                </Form.Item>
                                <Form.Item label="Contact Number"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <TextInput name="contactNumber" placeholder={this.state.formControls.contactNumber.placeholder}
                                        value={this.state.formControls.contactNumber.value}
                                        onChange={this.changeHandler}
                                    />
                                </Form.Item>
                                <Form.Item label="City">
                                    <SelectField name="city"
                                        placeholder={this.state.formControls.city.placeholder}
                                        value={this.state.formControls.city.value}
                                        onChange={this.selectChangeHandler}
                                        options={this.state.cities}
                                        disabled
                                        defaultValue="Karachi"
                                    />
                                </Form.Item>
                                <Form.Item label="Area">
                                    <Select name="area"
                                        showSearch
                                        value={this.state.formControls.area.value}
                                        onChange={this.areaChangeHandler}
                                        options={this.state.areas}
                                        onSearch={this.areaSearch}
                                    >
                                        {
                                            this.state.areas.map(option => {
                                                return <Option key={option} value={option}>{option}</Option>
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Delivery Address"
                                    rules={[{ required: true, message: 'Please input your delivery address!' }]}
                                >
                                    <TextArea
                                        name="deliveryAddress"
                                        value={this.state.formControls.deliveryAddress.value}
                                        placeholder={this.state.formControls.deliveryAddress.placeholder}
                                        onChange={this.changeHandler}
                                        rows={3}
                                    />
                                </Form.Item>
                                <Form.Item label="Special Instructions">
                                    <TextArea
                                        name="specialInstructions"
                                        value={this.state.formControls.specialInstructions.value}
                                        placeholder={this.state.formControls.specialInstructions.placeholder}
                                        onChange={this.changeHandler}
                                        rows={2}
                                    />
                                </Form.Item>
                                    <Button htmlType="submit" className="checkout-button" value="large" type="primary">Confirm Order!</Button>
                            </Form>
                        </Col>
                    </Row>
                </Card>

            </div> : <div></div>

        return (
            <div>
                <br /><br /><br /><br />
                {mainBox}
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        user: state.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMenu: (obj) => { dispatch({ type: "ADD_MENU", payload: obj }) },
        clearCart: ()=>{ dispatch({type:"CLEAR_CART"})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
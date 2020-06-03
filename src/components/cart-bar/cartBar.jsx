import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col, notification, Icon } from 'antd';
import './cart-bar.css'
import { withRouter } from 'react-router-dom';
import { throwStatement } from '@babel/types';
class CartBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cart: this.props.cart,
            totalItems: 0
        }
    }
    componentDidMount() {
        this.totalItems();
}

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.cart.total != prevState.cart.total) {
            return { cart: nextProps.cart };
        }
        else return null;
    }

    handleCheckout = () => {
        this.props.history.push('checkout')
    }

    totalItems = () => {
        let count = 0;
        this.state.cart.items.forEach(item => count = count + item.quantity);
        this.setState({ totalItems: count });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.cart)
        if (prevState.cart.total !== this.state.cart.total) {
            this.setState({ ...this.state, cart: { ...this.state.cart } });
            this.totalItems();
        }
    }

    render() {

        return (
            this.state.cart.total > 0
                && !this.props.location.pathname.includes("checkout") ?
                <div className="cartBar">
                    <Row type="flex"
                        style={{
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            height: '100%'
                        }}
                    >
                        <Col>
                            <h3>
                                {`Total Items ${this.state.totalItems}`}
                            </h3>
                        </Col>
                        <Col>
                            <h3>
                                {`Total Ammount ${this.state.cart.total} pkr/-`}
                            </h3>
                        </Col>
                        <Col>
                            <Button
                                onClick={this.handleCheckout}
                                type="primary" shape="round" size="large">
                                Checkout
    
                                    <Icon type="double-right" />
                            </Button>
                            {/* <div></div> */}
                            {/* &nbsp
                            <Button type="danger" shape="circle" icon="search" />
     */}
                        </Col>

                    </Row>
                </div>
                : null
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMenu: (obj) => { dispatch({ type: "ADD_MENU", payload: obj }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartBar));





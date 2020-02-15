import React, { Component } from 'react';
import { formLayout } from './formLayout';
import TextInput from '../../form-components/text-input';
import { Form, FormInput, Button } from 'antd';
import RadioField from '../../form-components/radio-field';
import NumberInput from '../../form-components/number-input';
import { connect } from 'react-redux';

class CheifRegistrationContactInfoFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            formControls: {
                fullAddress: {
                    value: '',
                    placeholder: 'Gulshan 13/D ...................',
                },
                postalCode: {
                    value: '',
                    placeholder: '72900'
                },
                email: {
                    value: '',
                    placeholder: 's.izhar@gmail.com'
                },
                mobilePhoneNumber: {
                    value: '',
                    placeholder: '03168293987'
                },
                whatsAppNumber: {
                    value: '',
                    placeholder: '03168293987'
                }
            }
        }
    }


    submitHandler = event => {
        const { formControls } = this.state;
        let newObject = {
            fullAddress: formControls.fullAddress.value,
            whatsAppNumber: formControls.whatsAppNumber.value,
            postalCode: formControls.postalCode.value,
            mobilePhoneNumber: formControls.mobilePhoneNumber.value,
            email: formControls.email.value,
        };
        this.props.addToChiefRequest(newObject);
        this.props.submit()
    };

    backHandler = (event) => {
        event.preventDefault();
        this.props.previous();
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
        })

        // console.log(this.state.formControls.fullAddress.value)

    }

    render() {
        return (
            <Form {...formLayout} layout="vertical" onSubmit={this.submitHandler}>
                <Form.Item label="Full Address">
                    <TextInput name="fullAddress" placeholder={this.state.formControls.fullAddress.placeholder}
                        value={this.state.formControls.fullAddress.value}
                        onChange={this.changeHandler}
                    />
                </Form.Item>
                <Form.Item label="Postal Code">
                    <TextInput name="postalCode" placeholder={this.state.formControls.postalCode.placeholder}
                        value={this.state.formControls.postalCode.value}
                        onChange={this.changeHandler}
                    />
                </Form.Item>
                <Form.Item label="Email">
                    <TextInput name="email" placeholder={this.state.formControls.email.placeholder}
                        value={this.state.formControls.email.value}
                        onChange={this.changeHandler}
                    />
                </Form.Item>
                <Form.Item label="Mobile Number">
                    <TextInput name="mobilePhoneNumber" placeholder={this.state.formControls.mobilePhoneNumber.placeholder}
                        value={this.state.formControls.mobilePhoneNumber.value}
                        onChange={this.changeHandler}
                    />
                </Form.Item>

                <Form.Item>

                    <Button onClick={this.backHandler}>
                        Previouss
                    </Button>
                    <Button onClick={this.submitHandler}>
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToChiefRequest: (payload) => { dispatch({ type: "ADD_TO_CHIEF_REQUEST", payload: payload }) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheifRegistrationContactInfoFormContainer);
import React, { Component } from 'react';
import { formLayout } from './formLayout';
import TextInput from '../../form-components/text-input';
import { Result,Spin, Icon, Form, FormInput, Button } from 'antd';
import RadioField from '../../form-components/radio-field';
import NumberInput from '../../form-components/number-input';
import { connect } from 'react-redux';
import SelectField from '../../form-components/select-field';
import api from "../../../api";

class RiderRegistrationContactInfoFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            result: {
                showResult: false,
                success: false,
                error: false
            },
            showLoading: false,
            formControls: {
                fullAddress: {
                    value: '',
                    placeholder: 'Gulshan 13/D ...................',
                },
                postalCode: {
                    value: '',
                    placeholder: '72900'
                },
                city: {
                    value: 'Karachi',
                    placeholder: 'Karachi'
                },
                email: {
                    value: '',
                    placeholder: 'talhamustafa@gmail.com'
                },
                mobilePhoneNumber: {
                    value: '',
                    placeholder: '03168293987'
                },
            }
        }
    }


    submitHandler = event => {
        const { formControls } = this.state;
        let newObject = {
            ...this.props.riderRequest,
            address: formControls.fullAddress.value,
            postal_Code: formControls.postalCode.value,
            phone_no: formControls.mobilePhoneNumber.value,
            email: formControls.email.value,
            city_id: 1,
        };
        this.props.addToRiderRequest(newObject);
        // this.props.submit()
        console.log("newObject", newObject);
        api.post('website/rider/send/request', newObject)
            .then(result => {
                this.setState({
                    data: result.data,
                    showLoading: false,
                    result: { showResult: true, success: true, error: false },

                }, () => {
                    console.log("data submited", result.data);
                })
            })
            .catch(e => {
                console.log("kkkk", e);
                this.setState({
                    ...this.state,
                    showLoading: false,
                    result: { showResult: true, success: false, error: true },
                })
            });


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

    }

    render() {
        return (
            this.state.result.showResult == false ?
                <Spin spinning={this.state.showLoading} tip="Submiting The Request...." delay={500}>
                    <Form {...formLayout} layout="vertical" onSubmit={this.submitHandler}>
                        <Form.Item label="Full Address">
                            <TextInput name="fullAddress" placeholder={this.state.formControls.fullAddress.placeholder}
                                value={this.state.formControls.fullAddress.value}
                                onChange={this.changeHandler}
                            />
                        </Form.Item>
                        <Form.Item label="City">
                            <SelectField name="city"
                                placeholder={this.state.formControls.city.placeholder}
                                value={this.state.formControls.city.value}
                                onChange={this.changeHandler}
                                options={[{ name: "Karachi", value: 1 }, { name: "Lahore", value: 2 }]}
                                defaultValue="1"
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
                        <br /><br />
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>

                            <Button size={"large"} shape={"round"} style={{ width: "25%" }} onClick={this.backHandler} type="primary">
                                <Icon type="left" />
                                Previous
                    </Button>
                            <Button size={"large"} shape={"round"} style={{ width: "25%", background: "#28a745", borderColor: "#28a745" }} onClick={this.submitHandler} type="primary">
                                Submit
                    <Icon type="right" />
                            </Button>

                        </div>
                    </Form>
                </Spin>
                :


                this.state.result.success == true ?
                    <Result
                        status="success"
                        title="Successfully Submited Request!"
                        subTitle="We Will Contact You Shortly!"
                        extra={[
                            <Button type="primary" key="console">
                                Goto Home
               </Button>
                        ]}
                    /> :
                    <div>

                        <Result
                            status="Error"
                            title="Sorry, Something Wrong Happened!"
                            // subTitle="Sorry, you are not authorized to access this page."
                            extra={<Button type="primary">Submit Again</Button>}
                        />
                    </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state.riderRequest);
    return {
        riderRequest: state.riderRequest
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToRiderRequest: (payload) => { dispatch({ type: "ADD_TO_RIDER_REQUEST", payload: payload }) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RiderRegistrationContactInfoFormContainer);
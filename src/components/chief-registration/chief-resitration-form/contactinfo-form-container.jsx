import React, { Component } from 'react';
import { formLayout } from './formLayout';
import TextInput from '../../form-components/text-input';
import SelectField from '../../form-components/select-field';
import { Result, Spin, Icon, Form, FormInput, Button } from 'antd';
import RadioField from '../../form-components/radio-field';
import NumberInput from '../../form-components/number-input';
import { connect } from 'react-redux';
import api from "../../../api";
import axios from 'axios';
class CheifRegistrationContactInfoFormContainer extends Component {
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
                city: {
                    value: 'Karachi',
                    placeholder: 'Karachi'
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

    hideLoading = () => {
        this.setState({
            ...this.state,
            showLoading: false
        })
    }

    submitHandler = event => {
        this.setState({
            ...this.state,
            showLoading: true,
        })
        const { formControls } = this.state;
        let newObject = {
            ...this.props.cheifRequest,
            fullAddress: formControls.fullAddress.value,
            whatsAppNumber: formControls.whatsAppNumber.value,
            postalCode: formControls.postalCode.value,
            mobilePhoneNumber: formControls.mobilePhoneNumber.value,
            email: formControls.email.value,
            city_id: 1,
        };
        this.props.addToChiefRequest(newObject);
        console.log(newObject,this.state.formControls,this.props.cheifRequest)
        api.post('website/chef/send/request', newObject)
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
            <div>
                {
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

                                <Form.Item label="Whatapp Number">
                                    <TextInput name="whatsAppNumber" placeholder={this.state.formControls.whatsAppNumber.placeholder}
                                        value={this.state.formControls.whatsAppNumber.value}
                                        onChange={this.changeHandler}
                                    />
                                </Form.Item>

                                <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>

                                    {/* <Button.Group size={"large"}> */}
                                        <Button size={"large"} shape={"round"} style={{width:"25%"}} onClick={this.backHandler} type="primary">
                                            <Icon type="left" />
                                            Previous
                        </Button>
                                        <Button size={"large"} shape={"round"} style={{width:"25%",background:"#28a745",borderColor:"#28a745"}} onClick={this.submitHandler} type="primary">
                                            Submit
                            <Icon type="right" />
                                        </Button>
                                    {/* </Button.Group> */}

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
                            </div>}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cheifRequest: state.cheifRequest
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToChiefRequest: (payload) => { dispatch({ type: "ADD_TO_CHIEF_REQUEST", payload: payload }) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheifRegistrationContactInfoFormContainer);
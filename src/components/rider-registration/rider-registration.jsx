import React from 'react';
import axios from 'axios';
import { Radio, Button, Row, Col, Steps } from 'antd';
import './rider-registration.css';
import Validator from "../../services/input-validators";
import RiderRegistrationContactInfoFormContainer from './rider-resitration-form/contactinfo-form-container';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber } from 'antd';
import RiderRegistrationPersonalInfoFormContainer from './rider-resitration-form/prsonalinfo-form-container';
import contactinfoFormContainer from './rider-resitration-form/contactinfo-form-container';
import { connect } from 'react-redux';
const Validatorr = new Validator();
const { Option } = Select;

const { Step } = Steps;

class RiderRegistration extends React.Component {

    state = {
        data: {},
        step: 0,
    };



    componentDidMount() {
        // axios.post('http://localhost:3000/registration/rider-registration', { name: "Talha Mustafa" }).then((result) => {
        //     this.setState({
        //         data: result.data.message,
        //     })
        // })
        //     .catch(e => {
        //         console.log("kkkk", e)
        //     });
    }
    next = () => {
        // e.preventDefault();
        // console.log("aa",Validatorr.nameValidator(e.target[0].value))
        // console.log("1",e.target.value);
        this.setState({
            step: this.state.step + 1,

        })
    }

    previous = () => {
        this.setState({
            step: this.state.step - 1
        })
    }

    submit = () => {
        console.log("cr",this.props.riderRequest)
    }



    formItemLayout = {
        labelCol: {
            xl: {
                span: 8,
                offset: 0,
            }, lg: {
                span: 8,
                offset: 0,
            }, md: {
                span: 8,
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
                span: 8,
                offset: 0,
            }, lg: {
                span: 8,
                offset: 0,
            }, md: {
                span: 8,
                offset: 0,
            }, sm: {
                span: 12,
                offset: 0,
            }, xs: {
                span: 12,
                offset: 0,
            }
        }
    };

    stepsContents = [
        {
            step: 0,
            content:
                <RiderRegistrationPersonalInfoFormContainer next={this.next} />

        },
        {
            step: 1,
            content:
                <RiderRegistrationContactInfoFormContainer
                    previous={this.previous}
                    submit={this.submit} />
        },
        // {
        //     step: 2,
        //     content: <div>

        //         <Button onClick={
        //             this.previous
        //         }>Previous</Button>
        //         <Button onClick={
        //             this.next
        //         }>Next</Button>
        //     </div>

        // },
        // {
        //     step: 3,
        //     content: <div>
        //         <Button onClick={
        //             this.previous
        //         }>Previous</Button>
        //         <Button onClick={
        //             this.submit
        //         }>Submit</Button>

        //     </div>

        // }
    ]

    render() {


        return (
            <div id="main" style={{ marginTop: "64px" }}>
                <Row type="flex">
                    <Col xl={18} lg={18} md={22} sm={22} xs={22}>
                        <Steps id="steps" current={this.state.step}>
                            <Step title="Personal Info" />
                            <Step title="Conatact Info" />
                            {/* <Step title="Procedure" /> */}
                            {/* <Step title="Terms And Conditions" /> */}
                        </Steps>
                    </Col>

                </Row>
                <br /><br />
                <Row type="flex" style={{ display: 'flex' }}>
                    <Col xl={18} lg={18} md={22} sm={22} xs={22}>
                        {
                            this.stepsContents.find(x => x.step == this.state.step).content
                        }</Col>
                </Row>

            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        riderRequest: state.riderRequest
    }
}
const mapDispatchToProps = (dispatc)=>{
    return{
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RiderRegistration);
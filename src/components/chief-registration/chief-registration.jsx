import React from 'react';
import axios from 'axios';
import { Row, Col, Steps } from 'antd';
import './chief-registration.css';
import CheifRegistrationContactInfoFormContainer from './chief-resitration-form/contactinfo-form-container';
import CheifRegistrationPersonalInfoFormContainer from './chief-resitration-form/prsonalinfo-form-container';
import { connect } from 'react-redux';
import API from "../../api";
const { Step } = Steps;

class ChiefRegistration extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        data: {},
        step: 0,
    };



    componentDidMount() {

    }
    next = () => {
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
        console.log("hitting",this.props.cheifRequest)
        // API.post('/chef/send/request', this.props.cheifRequest)
        //     .then(result => {
        //         this.setState({
        //             data: result.data,
        //         },()=>{
        //             console.log("data submited", result.data.message);
        //         })
        //     })
        //     .catch(e => {
        //         console.log("kkkk", e);
        //         this.setState({
        //             ...this.state,
        //             showLoading: false,
        //         })
        //     });


        // this.setState({
        //     ...this.state,
        //     showLoading: true,
        // })

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
                <CheifRegistrationPersonalInfoFormContainer next={this.next} />

        },
        {
            step: 1,
            content:
                <CheifRegistrationContactInfoFormContainer
                    previous={this.previous}
                    submit={this.submit} />
        },
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

const mapStateToProps = (state) => {
    return {
        cheifRequest: state.cheifRequest
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChiefRegistration);
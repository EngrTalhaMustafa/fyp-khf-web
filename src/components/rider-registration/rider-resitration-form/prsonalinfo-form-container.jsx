import React, { Component } from 'react';
import { formLayout } from './formLayout';
import TextInput from '../../form-components/text-input';
import { Form, FormInput, Button } from 'antd';
import RadioField from '../../form-components/radio-field';
import NumberInput from '../../form-components/number-input';
import { connect } from 'react-redux';

class CheifRegistrationPersonalInfoFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      formControls: {
        fullName: {
          value: '',
          placeholder: 'Sumaiya Izhar',
        },
        fatherHusbandName: {
          value: '',
          placeholder: 'Danish Izhar'
        },
        CNICNumber: {
          value: '',
          placeholder: '42201-4242273-3'
        },
        gender: {
          value: '',
          placeholder: 'm'
        },
        age: {
          value: 0,
          placeholder: '40'
        }
      }
    }
  }
  genderOptions = [{ value: "m", name: "male" }, , { value: "f", name: "female" }, { value: "o", name: "other" }]


  submitHandler = event => {
    const {formControls} = this.state;
    let newObject = {
      fullName: formControls.fullName.value,
      fatherHusbandName: formControls.fatherHusbandName.value,
      CNICNumber: formControls.CNICNumber.value,
      gender: formControls.gender.value,
      age: formControls.age.value,
    };
    this.props.addToChiefRequest(newObject);
    this.props.next();
  };

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

    // console.log(this.state.formControls.fullName.value)

  }

  render() {
    return (
      <Form {...formLayout} layout="vertical" onSubmit={this.submitHandler}>
        <Form.Item label="Full Name">
          <TextInput name="fullName" placeholder={this.state.formControls.fullName.placeholder}
            value={this.state.formControls.fullName.value}
            onChange={this.changeHandler}
          />
        </Form.Item>
        <Form.Item label="Father/Husband Name">
          <TextInput name="fatherHusbandName" placeholder={this.state.formControls.fatherHusbandName.placeholder}
            value={this.state.formControls.fatherHusbandName.value}
            onChange={this.changeHandler}
          />
        </Form.Item>
        <Form.Item label="CNIC Number">
          <TextInput name="CNICNumber" placeholder={this.state.formControls.CNICNumber.placeholder}
            value={this.state.formControls.CNICNumber.value}
            onChange={this.changeHandler}
          />
        </Form.Item>
        <Form.Item label="Gender">
          <RadioField name="gender" placeholder={this.state.formControls.gender.placeholder}
            value={this.state.formControls.gender.value}
            onChange={this.changeHandler}
            options={this.genderOptions}
          />
        </Form.Item>
        <Form.Item label="Age">
          <NumberInput
            name="age"
            type="number"
            value={this.state.formControls.age.value}
            min={0} max={60}
            onChange={this.changeHandler} />
        </Form.Item>

        <Form.Item>
          <Button onClick={this.submitHandler}>
            Next
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


export default connect(mapStateToProps, mapDispatchToProps)(CheifRegistrationPersonalInfoFormContainer);
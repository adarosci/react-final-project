import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form'

export class BillingCycleCreate extends Component {
    render() {
        const {handlerSubmit} = this.props
        return (
            <form role='form' onSubmit={handlerSubmit}>
                <div className='box-body'>
                    <Field name='name' component='input'></Field>
                    <Field name='month' component='input'></Field>
                    <Field name='year' component='input'></Field>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleCreate)

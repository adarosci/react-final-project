import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput';


export class BillingCycleCreate extends Component {
    render() {
        const {handleSubmit} = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome'></Field>
                    <Field name='month' component={labelAndInput} label='Mês' cols='12 4' placeholder='Informe o mês'></Field>
                    <Field name='year' component={labelAndInput} label='Ano' cols='12 4' placeholder='Informe o ano'></Field>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleCreate)

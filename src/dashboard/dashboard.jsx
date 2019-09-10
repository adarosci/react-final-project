import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ValueBox from '../common/widget/valueBox'
import { getSummary } from './redux'


class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <section className='content-header'>
                    <h1>Dashboard <small>Versão 1.0</small></h1>
                </section>
                <section className='content'>
                    <div className='row'>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Creditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </div>
                </section>
            </div>
        )
    }
}


export default connect(state => ({
    summary: state.dashboard.summary
}), dispatch => bindActionCreators({
    getSummary
}, dispatch))(Dashboard)
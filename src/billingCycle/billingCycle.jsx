import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'

import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import BillingCycleList from './billingCycleList';
import BillingCycleCreate from './billingCycleCreate';
import {create} from './billingCycleRedux';


class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <section className='content-header'>
                    <h1>Ciclos de Pagamento <small>Cadastro</small></h1>
                </section>
                <section className='content'>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader target='tabList' label='Listar' icon='bars'></TabHeader>
                            <TabHeader target='tabCreate' label='Incluir' icon='plus'></TabHeader>
                            <TabHeader target='tabUpdate' label='Alterar' icon='pencil'></TabHeader>
                            <TabHeader target='tabDelete' label='Excluir' icon='trash-o'></TabHeader>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <BillingCycleList></BillingCycleList>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <BillingCycleCreate onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                cccc
                            </TabContent>
                            <TabContent id='tabDelete'>
                                dddd
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </section>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    tab: state.tab
})
const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab,
    showTabs,
    create
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)
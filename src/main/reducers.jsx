import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import DashboardReducer from '../dashboard/redux'
import TabReducer from '../common/tab/tabActions'
import AuthReducer from '../auth/authRedux'
import BillingCycleRedux from '../billingCycle/billingCycleRedux';


const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    auth: AuthReducer,
    billingCycle: BillingCycleRedux,
    form: formReducer
})

export default rootReducer
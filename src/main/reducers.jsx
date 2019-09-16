import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/redux'
import TabReducer from '../common/tab/tabActions'
import AuthReducer from '../auth/authRedux'
import BillingCycleRedux from '../billingCycle/billingCycleRedux';


const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    auth: AuthReducer,
    billingCycle: BillingCycleRedux,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer
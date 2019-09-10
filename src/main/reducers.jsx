import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/redux'
import TabReducer from '../common/tab/tabActions'
import AuthReducer from '../auth/authRedux'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    auth: AuthReducer
})

export default rootReducer
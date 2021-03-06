import axios from "axios";
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList')
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }    
}

const INITIAL_STATE = { list: [] }
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}
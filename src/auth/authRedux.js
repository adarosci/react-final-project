const __USER_KEY = '_USER_LOGIN_AUTH'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(__USER_KEY)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(__USER_KEY)
                return { ...state, validToken: false, user: null }
            }
        case 'USER_FETCHED':
            localStorage.setItem(__USER_KEY, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}
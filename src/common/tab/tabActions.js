export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}

const INITIAL_STATE = { selected: '', visible: {} }
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload }
        case 'TAB_SHOWED':
            return { ...state, visible: action.payload }
        default:
            return state
    }
}
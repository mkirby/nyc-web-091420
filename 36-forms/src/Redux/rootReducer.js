import { combineReducers } from 'redux'

const defaultState = {
  count: 0,
  api: []
}

function numReducer(state = defaultState.count, action) {
  switch (action.type) {
    case 'INCREMENT_NUM':
      return state + 1
    default:
      return state
  }
}

function apiReducer(state = defaultState.api, action) {
  switch (action.type) {
    case 'FETCH_API':
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  count: numReducer,
  api: apiReducer
})

export default rootReducer
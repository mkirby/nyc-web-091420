import { INCREMENT_NUM, FETCH_API} from './actionTypes'

export function incrementCounter() {
  return { type: INCREMENT_NUM }
}

export function getDogsFromApi() {
  return function (dispatch) {
    fetch('http://localhost:5000/dogs')
        .then(resp => resp.json())
        .then(data => dispatch({ type: FETCH_API, payload: data }))

}
}
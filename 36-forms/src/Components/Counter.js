import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
  return <p>Count: {props.count}</p>
}

function mapStateToProps(state) {
  return { count: state.count }
}

export default connect(mapStateToProps, null)(Counter)
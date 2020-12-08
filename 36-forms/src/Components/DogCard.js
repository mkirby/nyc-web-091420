import React, { Component } from "react";
import { connect } from 'react-redux'
import { incrementCounter } from "../Redux/actions";

class DogCard extends Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    console.log(this.props)
    this.props.increment()
    this.setState({ clicked: !this.state.clicked }
    )
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="card">
        <span className="content">
          <h2 >{dog.name}</h2>
          <img alt="dog" src={dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.clickHandler}>Bark</button>
          {this.state.clicked ? (<h2>Bark</h2>) : null}
        </span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { increment: () => dispatch(incrementCounter())}
}

export default connect(null, mapDispatchToProps)(DogCard);

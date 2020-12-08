import React, { Component } from "react";
import { connect } from 'react-redux'
import CreateForm from "../Components/CreateForm";
import DogCard from '../Components/DogCard'
import SearchForm from "../Components/SearchForm";
import Counter from '../Components/Counter'
import { getDogsFromApi } from '../Redux/actions'

class DogsList extends Component {
  state = {
    searchValue: ""
  }

  componentDidMount() {
    this.props.fetchDogs()
  }

  renderDogs = () => {
    let filteredArray = this.props.api.filter(el => el.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    return filteredArray.map(el => <DogCard key={el.id} dog={el} />)
  }

  submitHandler = (dogObj) => {
    this.setState({ api: [...this.props.api, dogObj] });
  };

  searchChangeHandler = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <>
        <CreateForm submitHandler={this.submitHandler} />
        <SearchForm searchValue={this.state.searchValue} changeHandler={this.searchChangeHandler} />
        <div className="list">{this.renderDogs()}</div>
        <Counter />
      </>
    );
  }
}

function mapStateToProps(state) {
  return { api: state.api }
}

function mapDispatchToProps(dispatch) {
  return { fetchDogs: () => dispatch(getDogsFromApi()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsList);

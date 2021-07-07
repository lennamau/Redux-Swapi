import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChar } from '../actions'
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChar();
  }

  render() {
    if (this.props.fetching) {
      <h2>Loading Star Wars Characters...</h2>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state=> {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, 
  { getChar }
  
)(CharacterListView);

import React from "react";
import { connect } from "react-redux";
import { fetchSeasons } from "../actions";

class SeasonList extends React.Component {
  render() {
    if (!this.props.lectionary) {
      return <div>Please select a lectionary.</div>;
    }
    return <div>{this.props.lectionary.name}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    lectionary: state.selected_lectionary,
    seasons: state.seasons,
  };
};

export default connect(mapStateToProps, { fetchSeasons })(SeasonList);

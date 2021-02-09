import React from "react";
import { connect } from "react-redux";

const SeasonList = ({ lectionary }) => {
  if (!lectionary) {
    return <div>Please select a lectionary.</div>;
  }
  return <div>{lectionary}</div>;
};

const mapStateToProps = (state) => {
  return {
    lectionary: state.selected_lectionary,
  };
};

export default connect(mapStateToProps)(SeasonList);

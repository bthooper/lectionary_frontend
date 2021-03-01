import React from "react";
import { connect } from "react-redux";

class ScheduleList extends React.Component {
  render() {
    console.log("ScheduleList component:");
    console.log(this.props);
    if (!this.props.lectionary) {
      return <div>Please select a lectionary.</div>;
    }
    return <div>Lectionary Id {this.props.lectioanry.id}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    lectionary: state.selected_lectionary,
  };
};

export default connect(mapStateToProps)(ScheduleList);

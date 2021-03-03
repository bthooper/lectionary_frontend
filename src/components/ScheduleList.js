import React from "react";
import { connect } from "react-redux";

class ScheduleList extends React.Component {
  renderSchedules() {
    return this.props.schedules.map((schedule) => {
      return <li>{schedule.attributes.name}</li>;
    });
  }

  render() {
    console.log(this.props.schedules);
    if (this.props.schedules.length === 0) {
      return <div>Please select a lectionary.</div>;
    }
    return <ul>{this.renderSchedules()}</ul>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { schedules: state.selected_lectionary.schedules };
};

export default connect(mapStateToProps)(ScheduleList);

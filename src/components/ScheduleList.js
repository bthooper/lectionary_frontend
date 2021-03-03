import React from "react";
import { connect } from "react-redux";
import { selectSchedule } from "../actions";

class ScheduleList extends React.Component {
  renderSchedules() {
    return this.props.schedules.map((schedule) => {
      return (
        <div
          className="listitem ui item"
          key={schedule.id}
          onClick={(e) => this.props.selectSchedule("a")}
        >
          {schedule.attributes.name}
        </div>
      );
    });
  }

  render() {
    if (this.props.schedules.length === 0) {
      return <div>Please select a lectionary.</div>;
    }
    return (
      <div className="ui">
        <h4>
          <i className="calendar icon"></i>Schedules
        </h4>
        <div className="ui divided list items">{this.renderSchedules()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    schedules: state.selected_lectionary.schedules,
    selectedSchedule: state.selected_schedule,
  };
};

export default connect(mapStateToProps, { selectSchedule })(ScheduleList);

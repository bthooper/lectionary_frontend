import React from "react";
import { connect } from "react-redux";
import { selectSchedule } from "../actions";

class ScheduleList extends React.Component {
  renderSchedules() {
    return this.props.schedules.map((schedule) => {
      return (
        <option value={schedule.id} key={schedule.id}>
          {schedule.attributes.name}
        </option>
      );
    });
  }

  render() {
    if (this.props.schedules.length === 0) {
      return <div></div>;
    }
    return (
      <div className="item">
        <h4>
          <i className="calendar icon"></i>Schedules
        </h4>
        <div className="select-schedule ui">
          <form className="ui form">
            <div className="field">
              <select
                onChange={(e) =>
                  this.props.selectSchedule(this.props.url, e.target.value)
                }
                name="schedule"
                id="schedule"
              >
                <option value="" key="none">
                  Select Schedule
                </option>
                {this.renderSchedules()}
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.selected_lectionary.url,
    schedules: state.selected_lectionary.schedules,
    selectedSchedule: state.selected_schedule,
  };
};

export default connect(mapStateToProps, { selectSchedule })(ScheduleList);

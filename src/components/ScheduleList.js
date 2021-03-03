import React from "react";
import { connect } from "react-redux";

class ScheduleList extends React.Component {
  renderSchedules() {
    return this.props.schedules.map((schedule) => {
      return (
        <div className="ui item">
          <a href="#">{schedule.attributes.name}</a>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.schedules);
    if (this.props.schedules.length === 0) {
      return <div>Please select a lectionary.</div>;
    }
    return (
      <div className="ui">
        <h4>
          <i className="calendar icon"></i>Schedules
        </h4>
        <div className="ui divided list link items">
          {this.renderSchedules()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { schedules: state.selected_lectionary.schedules };
};

export default connect(mapStateToProps)(ScheduleList);

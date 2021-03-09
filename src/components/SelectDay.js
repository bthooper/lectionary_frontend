import React from "react";
import { connect } from "react-redux";
import { selectDay } from "../actions";

class SelectDay extends React.Component {
  renderDays() {
    return this.props.days.map((day) => {
      return (
        <button
          className="ui day-select button"
          key={day.id}
          onClick={(e) => {
            e.preventDefault();
            this.props.selectDay(`${this.props.url}/days/${day.id}`);
          }}
        >
          {day.attributes.name}
        </button>
      );
    });
  }
  render() {
    if (this.props.days.length === 0) {
      return <div></div>;
    }
    return (
      <div className="item">
        <h4>
          <i className="sun icon"></i>Days
        </h4>
        <div id="select-day" className="ui">
          {this.renderDays()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.selected_season.url,
    days: state.selected_season.days,
    selectedDay: state.selected_day,
  };
};

export default connect(mapStateToProps, { selectDay })(SelectDay);

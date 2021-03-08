import React from "react";
import { connect } from "react-redux";
import { selectDay } from "../actions";

class SelectDay extends React.Component {
  renderDays() {
    return this.props.days.map((day) => {
      return (
        <a class="active item" onClick={(e) => this.props.selectDay(e)}>
          {day.attributes.name}
        </a>
      );
    });
  }
  render() {
    return (
      <div className="item">
        <h4>
          <i className="sun icon"></i>Days
        </h4>
        <div class="select-day ui link list">{this.renderDays()}</div>
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

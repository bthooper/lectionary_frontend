import React from "react";
import { connect } from "react-redux";

class ShowReadings extends React.Component {
  renderReadings() {
    return this.props.readings.map((reading) => {
      return (
        <div className="item" key={reading.id}>
          <div className="header">{reading.reading_type}</div>
          {reading.reference}
        </div>
      );
    });
  }

  render() {
    if (this.props.readings.length === 0) {
      return <div></div>;
    }
    return (
      <div>
        <h3>{this.props.day}</h3>
        <div className="ui list">{this.renderReadings()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    day: state.selected_day.name,
    readings: state.selected_day.readings,
  };
};

export default connect(mapStateToProps)(ShowReadings);

import React from "react";
import LectionaryList from "./LectionaryList";
import ScheduleList from "./ScheduleList";
import SeasonList from "./SeasonList";
import SelectDay from "./SelectDay";
import ShowReadings from "./ShowReadings";

class Home extends React.Component {
  render() {
    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <LectionaryList />
        </div>
        <div className="four wide column">
          <ScheduleList />
          <SeasonList />
          <SelectDay />
        </div>
        <div className="twelve wide column">
          <ShowReadings />
        </div>
      </div>
    );
  }
}

export default Home;

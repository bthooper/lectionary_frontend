import React from "react";
import LectionaryList from "./LectionaryList";
import ScheduleList from "./ScheduleList";
import SeasonList from "./SeasonList";
import SelectDay from "./SelectDay";
import ShowReadings from "./ShowReadings";

function Home() {
  return (
    <div className="ui grid container">
      <div className="sixteen wide column">
        <LectionaryList />
      </div>
      <div className="five wide column">
        <div className="ui relaxed divided list">
          <ScheduleList />
          <SeasonList />
          <SelectDay />
        </div>
      </div>
      <div className="eleven wide column">
        <ShowReadings />
      </div>
    </div>
  );
}

export default Home;

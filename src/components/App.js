import React from "react";
import SelectLectionary from "./SelectLectionary";
import SelectSeason from "./SelectSeason";
import SelectDay from "./SelectDay";
import ShowReadings from "./ShowReadings";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SelectLectionary />
        <SelectSeason />
        <SelectDay />
        <ShowReadings />
      </div>
    );
  }
}

export default App;

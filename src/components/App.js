import React from "react";
import NavBar from "./NavBar";
import SelectLectionary from "./SelectLectionary";
import SelectSeason from "./SelectSeason";
import SelectDay from "./SelectDay";
import ShowReadings from "./ShowReadings";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="ui grid container">
          <div className="sixteen wide column">
            <SelectLectionary />
          </div>
          <div className="four wide grey column">
            <SelectSeason />
            <SelectDay />
          </div>
          <div className="twelve wide red column">
            <ShowReadings />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

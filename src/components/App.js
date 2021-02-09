import React from "react";

import NavBar from "./NavBar";
import LectionaryList from "./LectionaryList";
import SeasonList from "./SeasonList";
import SelectDay from "./SelectDay";
import ShowReadings from "./ShowReadings";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="ui grid container">
          <div className="sixteen wide column">
            <LectionaryList />
          </div>
          <div className="four wide column">
            <SeasonList />
            <SelectDay />
          </div>
          <div className="twelve wide column">
            <ShowReadings />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

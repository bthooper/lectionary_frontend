import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Notes from "./Notes";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            path="/notes/:id"
            render={(routerProps) => <Notes {...routerProps} />}
          />
          <Route
            exact
            path="/notes"
            render={(routerProps) => <Notes {...routerProps} />}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

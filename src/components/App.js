import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Notes from "./Notes";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    notes: {},
    selected_note: {},
  };

  fetchNotes = () => {
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => {
        const notesData = data.data;
        const notesObject = notesData.reduce(
          (o, note) => ({ ...o, [note.id]: note }),
          {}
        );
        this.setState({
          notes: notesObject,
          selected_note: this.state.selected_note,
        });
      });
  };

  selectNote = (event = null, note = {}) => {
    if (event) {
      event.preventDefault();
    }
    this.setState({
      ...this.state,
      selected_note: note,
    });
  };

  deleteNote = async (event, note) => {
    event.preventDefault();
    await fetch(`http://localhost:3000/notes/${note.id}`, {
      method: "DELETE",
    });
    const { [note.id]: _, ...updatedNotes } = this.state.notes;
    this.setState({
      notes: updatedNotes,
      selected_note: {},
    });
  };

  componentDidMount() {
    this.fetchNotes();
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            path="/notes"
            render={(routerProps) => (
              <Notes
                {...routerProps}
                notes={this.state.notes}
                fetchNotes={this.fetchNotes}
                selected_note={this.state.selected_note}
                selectNote={this.selectNote}
                deleteNote={this.deleteNote}
              />
            )}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

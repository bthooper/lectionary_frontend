import React from "react";
import { Route, Switch } from "react-router-dom";
import NotesList from "./NotesList";
import NoteDetail from "./NoteDetail";
import NoteEdit from "./NoteEdit";

class Notes extends React.Component {
  state = {
    notes: {},
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
        });
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
    });
  };

  componentDidMount() {
    this.fetchNotes();
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <div className="ui segment">
            <h2>NOTES</h2>
          </div>
          <div className="ui grid container">
            <div className="five wide column">
              <NotesList
                notes={this.state.notes}
                fetchNotes={this.fetchNotes}
              />
            </div>
            <div className="eleven wide column">
              <Route
                exact
                path={"/notes/:id/edit"}
                render={(routerProps) => (
                  <NoteEdit {...routerProps} notes={this.state.notes} />
                )}
              />
              <Route
                path={"/notes/:id"}
                exact
                render={(routerProps) => (
                  <NoteDetail
                    {...routerProps}
                    notes={this.state.notes}
                    deleteNote={this.deleteNote}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;

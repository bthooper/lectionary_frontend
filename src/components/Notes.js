import React from "react";
import { Route } from "react-router-dom";
import NotesList from "./NotesList";
import NoteDetail from "./NoteDetail";
import NoteEdit from "./NoteEdit";

class Notes extends React.Component {
  state = {
    notes: {},
    searchResults: null,
    notesCount: 0,
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
        if (notesData.length > this.state.notesCount) {
          this.setState({
            notes: notesObject,
          });
        }
      });
  };

  searchNotes = (query) => {
    const notesArray = Object.values(this.state.notes);
    const searchArray = notesArray.filter((note) =>
      note.attributes.title.includes(query)
    );
    const searchObject = searchArray.reduce(
      (o, note) => ({ ...o, [note.id]: note }),
      {}
    );
    console.table(searchObject);
    this.setState({
      ...this.state,
      searchResults: searchObject,
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

  newNote = async () => {
    const note = {
      data: {
        attributes: {
          title: "Untitled Note",
        },
      },
    };
    const newNoteResponse = await fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const newNote = await newNoteResponse.json();
    this.props.history.push(`/notes/${newNote.id}/edit`);
  };

  updateNote = async (event, note, title, content) => {
    event.preventDefault();
    const data = { title, content };
    await fetch(`http://localhost:3000/notes/${note.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    this.fetchNotes();
    this.props.history.push(`/notes/${note.id}`);
  };

  componentDidMount() {
    this.fetchNotes();
  }

  componentDidUpdate() {
    this.fetchNotes();
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <div className="ui segment">
            <h2>NOTES</h2>
          </div>
          <div>
            <h2>Search</h2>
            <form>
              <input
                type="text"
                onChange={(e) => this.searchNotes(e.target.value)}
              />
            </form>
          </div>
          <div className="ui grid container">
            <div className="five wide column">
              <NotesList
                notes={this.state.searchResults || this.state.notes}
                fetchNotes={this.fetchNotes}
              />
            </div>
            <div className="eleven wide column">
              <Route
                exact
                path={"/notes/:id/edit"}
                render={(routerProps) => (
                  <NoteEdit
                    {...routerProps}
                    notes={this.state.notes}
                    updateNote={this.updateNote}
                  />
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

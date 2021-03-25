import React from "react";
import { Route, Switch } from "react-router-dom";
import NotesList from "./NotesList";
import NoteDetail from "./NoteDetail";
import NoteEdit from "./NoteEdit";

const Notes = ({
  notes,
  fetchNotes,
  selectNote,
  deleteNote,
  selected_note,
  match,
}) => {
  console.log(match);

  function renderNoteDetail(match) {
    if (match.url.slice(-4) === "edit") {
      return <NoteEdit note_id={match.params.id} url={match.path} />;
    } else {
      return (
        <NoteDetail selected_note={selected_note} deleteNote={deleteNote} />
      );
    }
  }
  return (
    <div className="ui grid container">
      <div className="sixteen wide column">
        <div className="ui segment">
          <h2>NOTES</h2>
        </div>
        <div className="ui grid container">
          <div className="five wide column">
            <NotesList
              selectNote={selectNote}
              notes={notes}
              fetchNotes={fetchNotes}
            />
          </div>
          <div className="eleven wide column">
            <Switch>
              <Route
                exact
                path={`${match.url}/:noteId`}
                render={() => {
                  <NoteDetail
                    selected_note={selected_note}
                    deleteNote={deleteNote}
                  />;
                }}
              />
              <Route
                path={`${match.url}/:noteId/edit`}
                render={() => {
                  <NoteEdit selected_note={selected_note} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;

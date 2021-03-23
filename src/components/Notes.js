import React from "react";
import { Route } from "react-router-dom";
import NotesList from "./NotesList";
import NoteDetail from "./NoteDetail";

const Notes = ({ notes, fetchNotes, selectNote, selected_note }) => {
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
            <NoteDetail selected_note={selected_note} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;

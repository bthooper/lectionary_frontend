import React from "react";
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

  const renderNoteDetail = (match) => {
    if (match.params.id) {
      return <NoteEdit note_id={match.params.id} url={match.path} />;
    } else {
      return (
        <NoteDetail selected_note={selected_note} deleteNote={deleteNote} />
      );
    }
  };
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
          <div className="eleven wide column">{renderNoteDetail(match)}</div>
        </div>
      </div>
    </div>
  );
};

export default Notes;

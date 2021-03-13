import React from "react";

const NoteDetail = ({ match, notes }) => {
  return (
    <div>
      <h4>{notes[match.params.noteId].title}</h4>
      <p>{notes[match.params.noteId].date}</p>
    </div>
  );
};

export default NoteDetail;

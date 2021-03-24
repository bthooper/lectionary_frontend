import React from "react";

const NoteEdit = ({ note_id, url }) => {
  return (
    <div>
      <div>
        <h1>NoteEdit</h1>
        <p>{note_id}</p>
        <p>{url}</p>
      </div>
    </div>
  );
};

export default NoteEdit;

import React from "react";
import { Link, useHistory } from "react-router-dom";

const NotesList = ({ notes, fetchNotes }) => {
  const renderNotes = Object.keys(notes).map((noteId) => (
    <div className="item" key={noteId}>
      <Link key={noteId} to={`/notes/${noteId}`}>
        {notes[noteId].attributes.title}
      </Link>
    </div>
  ));

  const newNote = async () => {
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
  };

  return (
    <div>
      <button className="mini ui right floated button" onClick={newNote}>
        <i className="plus icon"></i>Add new note
      </button>
      <div>
        <h4>Note List</h4>
        {renderNotes}
      </div>
    </div>
  );
};

export default NotesList;

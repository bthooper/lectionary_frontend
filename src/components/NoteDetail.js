import React from "react";
import { Link } from "react-router-dom";

const NoteDetail = ({ deleteNote, selected_note }) => {
  if (selected_note.attributes) {
    return (
      <div>
        <button
          className="mini ui right floated button red"
          onClick={(e) => deleteNote(e, selected_note)}
        >
          <i className="icon delete"></i>
          Delete
        </button>
        <Link key={selected_note.id} to={`/notes/${selected_note.id}/edit`}>
          <button className="mini ui right floated button">
            <i className="icon edit"></i>
            Edit
          </button>
        </Link>
        <div>
          <h1>{selected_note.attributes.title}</h1>
          <div>{selected_note.attributes.content}</div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default NoteDetail;

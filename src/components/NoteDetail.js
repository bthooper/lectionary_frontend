import React from "react";
import { Link } from "react-router-dom";

const NoteDetail = ({ match, notes = {}, deleteNote }) => {
  const note = notes[match.params.id];
  if (note === undefined) {
    return <div></div>;
  } else {
    return (
      <div>
        <button
          className="mini ui right floated button red"
          onClick={(e) => deleteNote(e, note)}
        >
          <i className="icon delete"></i>
          Delete
        </button>
        <Link key={note.id} to={`/notes/${note.id}/edit`}>
          <button className="mini ui right floated button">
            <i className="icon edit"></i>
            Edit
          </button>
        </Link>
        <div>{note.attributes.title}</div>
      </div>
    );
  }
};

export default NoteDetail;

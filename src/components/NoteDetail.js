import React from "react";

const NoteDetail = ({ selected_note }) => {
  if (selected_note.attributes) {
    return (
      <div>
        <button className="mini ui right floated button red">
          <i className="icon delete"></i>
          Delete
        </button>
        <button className="mini ui right floated button">
          <i className="icon edit"></i>
          Edit
        </button>
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

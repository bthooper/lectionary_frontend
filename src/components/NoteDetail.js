import React from "react";

const NoteDetail = (
  props = {
    selected_note: {
      title: "",
    },
  }
) => {
  console.log(props);
  return (
    <div>
      <h4>Note Text</h4>
      <p>Selected Note</p>
    </div>
  );
};

export default NoteDetail;

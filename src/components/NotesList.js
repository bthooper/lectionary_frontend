import React from "react";
import { Link } from "react-router-dom";

const NotesList = ({ notes }) => {
  const renderNotes = Object.keys(notes).map((noteId) => (
    <div className="item" key={noteId}>
      <Link key={noteId} to={`/notes/${noteId}`}>
        {notes[noteId].title}
      </Link>
      <div className="description">{notes[noteId].date}</div>
    </div>
  ));

  return (
    <div>
      <h4>Note List</h4>
      {renderNotes}
    </div>
  );
};

// class NotesList extends React.Component {
//   renderNotes() {
//     return this.props.notes.map((note) => {
//       return (
//         <div className="item" key={note.id}>
//           <a href={`/notes/${note.id}`} className="header">
//             {note.title}
//           </a>
//           <div className="description">{note.date}</div>
//         </div>
//       );
//     });
//   }

//   render() {
//     if (this.props.notes.length > 0) {
//       return (
//         <div>
//           <h4>Note List</h4>
//           <div id="select-day" className="ui list">
//             {this.renderNotes()}
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h4>No notes yet.</h4>
//         </div>
//       );
//     }
//   }
// }

// NotesList.defaultProps = {
//   notes: [],
// };

export default NotesList;

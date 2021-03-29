import React from "react";
import { Switch, Route } from "react-router-dom";
import NoteDetail from "./NoteDetail";

class NoteDetailContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Route
          path={`/notes/:id`}
          render={() => {
            <NoteDetail />;
          }}
        />
      </div>
    );
  }
}

export default NoteDetailContainer;

// deleteNote = async (event, note) => {
//       event.preventDefault();
//   await fetch(`http://localhost:3000/notes/${note.id}`, {
//           method: "DELETE",

//   });
//       const { [note.id]: _, ...updatedNotes  } = this.state.notes;
//   this.setState({
//           notes: updatedNotes,

//   });

// };

//   renderNoteDetail(match) {
//     if (match.url.slice(-4) === "edit") {
//       return <NoteEdit note_id={match.params.id} url={match.path} />;
//     } else {
//       return (
//         <NoteDetail
//           selected_note={this.state.selected_note}
//           deleteNote={this.deleteNote}
//         />
//       );
//     }
//   }
//               <Switch>
//                 <Route
//                   path={`${url}/:noteId`}
//                   render={(routerProps) => {
//                     <NoteDetail
//                       {...routerProps}
//                       deleteNote={this.deleteNote}
//                       notes={this.state.notes}
//                     />;
//                   }}
//                 />
//                 <Route
//                   path={`${url}/:noteId/edit`}
//                   render={() => {
//                     <NoteEdit notes={this.state.notes} />;
//                   }}
//                 />
//               </Switch>

import React from "react";

class NotesList extends React.Component {
  renderNotes() {
    return this.props.notes.map((note) => {
      return (
        <div
          className="item"
          key={note.id}
          onClick={(e) => {
            e.preventDefault();
            alert(e.target.innerHTML);
          }}
        >
          <a className="header">{note.title}</a>
          <div className="description">{note.date}</div>
        </div>
      );
    });
  }

  render() {
    if (this.props.notes.length > 0) {
      return (
        <div>
          <h4>Note List</h4>
          <div id="select-day" className="ui list">
            {this.renderNotes()}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h4>No notes yet.</h4>
        </div>
      );
    }
  }
}

NotesList.defaultProps = {
  notes: [],
};

export default NotesList;

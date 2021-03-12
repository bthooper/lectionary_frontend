import React from "react";
import NotesList from "./NotesList";
import NoteDetail from "./NoteDetail";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          date: "January 2, 2021",
          title: "This is a great note.",
        },
        {
          id: 2,
          date: "December 23, 2020",
          title: "Important things I learned.",
        },
      ],
      selected_note: {
        id: 1,
        date: "January 2, 2021",
        title: "This is a great note.",
      },
    };
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <div className="ui segment">
            <h2>NOTES</h2>
          </div>
          <div className="ui grid container">
            <div className="five wide column">
              <NotesList notes={this.state.notes} />
            </div>
            <div className="eleven wide column">
              <NoteDetail />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;

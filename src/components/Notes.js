import React from "react";
import { Route } from "react-router-dom";
import NotesList from "./NotesList";
import NoteDetail from "./NoteDetail";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {
        1: {
          id: 1,
          date: "January 2, 2021",
          title: "This is a great note.",
        },
        2: {
          id: 2,
          date: "December 23, 2020",
          title: "Important things I learned.",
        },
        3: {
          id: 3,
          date: "October 2, 2020",
          title: "A wonderful note I wrote.",
        },
      },
      selected_note: {},
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
              <Route
                exact
                path={`${this.props.match.url}`}
                render={() => (
                  <h4>
                    Create a new note or choose a note from the note list.
                  </h4>
                )}
              />
              <Route
                path={`${this.props.match.url}/:noteId`}
                render={(routerProps) => (
                  <NoteDetail {...routerProps} notes={this.state.notes} />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;

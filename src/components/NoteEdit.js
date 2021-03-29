import React from "react";
import { Link } from "react-router-dom";

class NoteEdit extends React.Component {
  state = {
    title: "An example note",
    content: "This is content that is hardcoded right now just for example.",
  };

  componentDidMount = () => {
    const note = this.props.notes[this.props.match.params.id];
    if (note !== undefined) {
      this.setState({
        title: note.attributes.title,
        content: note.attributes.content,
      });
    }
  };

  note = () => {
    return this.props.notes[this.props.match.params.id];
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.note() === undefined) {
      return <div></div>;
    }
    return (
      <div>
        <div className="ui basic segment">
          <Link key={this.note().id} to={`/notes/${this.note().id}`}>
            <button className="mini ui right floated button">
              <i className="icon delete"></i>
              Cancel
            </button>
          </Link>
          <button
            className="mini ui right floated button green"
            onClick={(e) => this.props.updateNote(e)}
          >
            <i className="icon disk"></i>
            Save
          </button>
        </div>
        <div>
          <form className="ui form">
            <div className="field">
              <label>Title</label>
              <input
                onChange={(e) => this.handleChange(e)}
                type="text"
                name="title"
                value={this.state.title}
                placeholder="Title"
              />
            </div>
            <div className="field">
              <label>Content</label>
              <textarea
                onChange={(e) => this.handleChange(e)}
                name="content"
                value={this.state.content}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NoteEdit;

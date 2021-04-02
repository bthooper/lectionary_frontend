import React from "react";
import { Link } from "react-router-dom";

class NoteEdit extends React.Component {
  state = {
    title: undefined,
    content: undefined,
  };

  componentDidMount = () => {
    // const note = this.props.notes[this.props.match.params.id];
    if (this.note() !== undefined) {
      this.setState({
        title: this.note().attributes.title,
        content: this.note().attributes.content,
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
            onClick={(e) =>
              this.props.updateNote(
                e,
                this.note(),
                this.state.title,
                this.state.content
              )
            }
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
                placeholder="Your content."
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NoteEdit;

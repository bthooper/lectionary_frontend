import React from "react";
import { connect } from "react-redux";
import { fetchLectionaries, selectLectionary } from "../actions";

class LectionaryList extends React.Component {
  componentDidMount() {
    this.props.fetchLectionaries();
  }

  renderOptions() {
    return this.props.lectionaries.map((lectionary) => {
      return (
        <option value={lectionary.id} key={lectionary.id}>
          {lectionary.attributes.name}
        </option>
      );
    });
  }

  render() {
    return (
      <div className="select-lectionary ui segment">
        <form className="ui form">
          <div className="field">
            <label>Select Lectionary</label>
            <select
              className="ui selection dropdown"
              onChange={(e) => this.props.selectLectionary(e.target.value)}
              name="lectionary"
              id="lectionary"
            >
              <option value="" key="none">
                Select Lectionary
              </option>
              {this.renderOptions()}
            </select>
          </div>
        </form>
        {this.props.selectedLectionary.name ? (
          <div>
            <p>{this.props.selectedLectionary.owner}</p>
          </div>
        ) : (
          <p>Select a lectionary above.</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lectionaries: state.lectionaries,
    selectedLectionary: state.selected_lectionary,
  };
};

export default connect(mapStateToProps, {
  selectLectionary,
  fetchLectionaries,
})(LectionaryList);

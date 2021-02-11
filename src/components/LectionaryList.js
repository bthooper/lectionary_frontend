import React from "react";
import { connect } from "react-redux";
import { fetchLectionaries, selectLectionary } from "../actions";

class LectionaryList extends React.Component {
  componentDidMount() {
    this.props.fetchLectionaries();
  }

  renderOptions() {
    console.log(this.props.lectionaries);
    return this.props.lectionaries.map((lectionary) => {
      return (
        <option value={lectionary.id} key={lectionary.id}>
          {lectionary.attributes.name}
        </option>
      );
    });
  }

  render() {
    console.dir(this.props);
    return (
      <div className="select-lectionary ui segment">
        <form className="ui form">
          <div className="field">
            <label>Select Lectionary</label>
            <select
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lectionaries: state.lectionaries,
  };
};

export default connect(mapStateToProps, {
  selectLectionary,
  fetchLectionaries,
})(LectionaryList);

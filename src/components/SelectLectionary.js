import React from "react";
import { connect } from "react-redux";

class SelectLectionary extends React.Component {
  handleOnSelect = (event) => {
    console.log(event);
    this.props.selectLectionary();
  };

  render() {
    // const lectionary = this.props.lectionaries.data[0].attributes.name;
    return (
      <div className="select-lectionary ui segment">
        <form className="ui form">
          <div className="field">
            <label>Select Lectionary</label>
            <select
              name="lectionary"
              id="lectionary"
              onChange={this.handleOnSelect}
            >
              <option value="rcl">Revised Common Lectionary</option>
              <option value="nl">Narrative Lectionary</option>
              <option value="ol">Open Lectionary</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectLectionary: () => dispatch({ type: "SELECT_LECTIONARY" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLectionary);

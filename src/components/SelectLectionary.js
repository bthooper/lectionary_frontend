import React from "react";

class SelectLectionary extends React.Component {
  render() {
    // const lectionary = this.props.lectionaries.data[0].attributes.name;
    console.log(this.props.lectionaries[0]);
    return (
      <div className="select-lectionary ui segment">
        <form className="ui form">
          <div className="field">
            <label>Select Lectionary</label>
            <select name="lectionary" id="lectionary">
              <option value="rcl"></option>
              <option value="nl">Narrative Lectionary</option>
              <option value="ol">Open Lectionary</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

SelectLectionary.defaultProps = {
  lectionaries: [{ name: "Hooper's Default Lectionary" }],
};

export default SelectLectionary;

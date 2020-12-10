import React from "react";

class SelectLectionary extends React.Component {
  render() {
    return (
      <div className="select-lectionary ui segment">
        <form className="ui form">
          <div className="field">
            <label>Select Lectionary</label>
            <select name="lectionary" id="lectionary">
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

export default SelectLectionary;

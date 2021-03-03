import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="ui grid container">
        <div className="sixteen wide column">
          <div className="ui segment">
            <h2>ABOUT</h2>
            <p>
              The Hooper Lectionary Project was built to assist clergy and
              worship teams as they work together to plan worship services. The
              HLP allows users to browse various lectionary resources in order
              to plan next Sunday's worship service, or a service in the future.
              The lectionary readings are presented in the New Revised Standard
              Version, thanks to the Oremus Bible Browser. You can also add a
              note to the notes section.
            </p>
            <p>
              Future plans for the HLP are being considered. For example, a user
              accounts system would allow indiviual users to have notes that are
              private to them. Also, the notes could be associated with
              particular lectioanry readings istead of just the user in general.
              However, those upgrades will be considered for future versions.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

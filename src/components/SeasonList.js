import React from "react";
import { connect } from "react-redux";
import { selectSeason } from "../actions";

class SeasonList extends React.Component {
  renderSeasons() {
    return this.props.seasons.map((season) => {
      return (
        <option value={season.id} key={season.id}>
          {season.attributes.name}
        </option>
      );
    });
  }

  render() {
    if (this.props.seasons.length === 0) {
      return <div></div>;
    }
    return (
      <div className="item">
        <h4>
          <i className="snowflake icon"></i>Seasons
        </h4>
        <div className="select-season ui">
          <form className="ui form">
            <div className="field">
              <select
                onChange={(e) =>
                  this.props.selectSeason(this.props.url, e.target.value)
                }
              >
                <option value="" key="none">
                  Select Season
                </option>
                {this.renderSeasons()}
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.selected_schedule.url,
    seasons: state.selected_schedule.seasons,
    selectedSeason: state.selected_season,
  };
};

export default connect(mapStateToProps, { selectSeason })(SeasonList);

export const selectSeason = (url, season) => {
  return async function (dispatch) {
    if (season !== "") {
      const seasonResponse = await fetch(
        `http://localhost:3000/${url}/seasons/${season}`
      );
      const seasonResponseJSON = await seasonResponse.json();
      const seasonData = seasonResponseJSON.data;
      const daysResponse = await fetch(
        `http://localhost:3000/${url}/seasons/${season}/days`
      );
      const daysResponseJSON = await daysResponse.json();
      const daysData = daysResponseJSON.data;
      dispatch({
        type: "SELECT_SEASON",
        payload: {
          url: `${url}/seasons/${season}`,
          name: seasonData.attributes.name,
          days: daysData,
        },
      });
    } else {
      dispatch({
        type: "SELECT_SEASON",
        payload: {
          url: ``,
          name: "",
          days: [],
        },
      });
    }
  };
};

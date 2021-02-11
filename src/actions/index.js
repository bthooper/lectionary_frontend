export const selectLectionary = (lectionary) => {
  console.log("SelectLectionary");
  console.log(lectionary);
  return {
    type: "SELECT_LECTIONARY",
    payload: lectionary,
  };
};

export const fetchLectionaries = () => {
  return async function (dispatch) {
    const response = await fetch("http://localhost:3000/lectionaries", {
      method: "GET",
    });

    const responseJSON = await response.json();

    const lectionaries = responseJSON.data;

    dispatch({
      type: "FETCH_LECTIONARIES",
      payload: lectionaries,
    });
  };
};

// Fetches the seasons of a particular lectionary
export const fetchSeasons = (lectionary) => {
  return async function (dispatch) {
    const response = await fetch(
      `http://localhost:3000/lectionaries/${lectionary.id}/seasons`
    );
    const responseJSON = await response.json();
    const seasons = responseJSON.data;
    dispatch({
      type: "FETCH_SEASONS",
      payload: seasons,
    });
  };
};

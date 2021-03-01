export const selectLectionary = (lectionary) => {
  return async function (dispatch) {
    const response = await fetch(
      `http://localhost:3000/lectionaries/${lectionary}/schedules`
    );
    const responseJSON = await response.json();
    const schedules = responseJSON.data;
    console.log(schedules);
    dispatch({
      type: "SELECT_LECTIONARY",
      payload: {
        id: lectionary,
        schedules: schedules,
      },
    });
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

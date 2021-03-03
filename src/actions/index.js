export const selectLectionary = (lectionary) => {
  return async function (dispatch) {
    if (lectionary !== "") {
      // get the schedules related to the selected lectionary
      const schedule_response = await fetch(
        `http://localhost:3000/lectionaries/${lectionary}/schedules`
      );
      const scheduleJSON = await schedule_response.json();
      const schedules = scheduleJSON.data;

      // get the data on the selected lectionary
      const lectionary_response = await fetch(
        `http://localhost:3000/lectionaries/${lectionary}`
      );
      const lectionaryJSON = await lectionary_response.json();
      const selected_lectionary = lectionaryJSON.data;
      dispatch({
        type: "SELECT_LECTIONARY",
        payload: {
          name: selected_lectionary.attributes.name,
          owner: selected_lectionary.attributes.owner,
          schedules: schedules,
        },
      });
    } else {
      dispatch({
        type: "SELECT_LECTIONARY",
        payload: {
          name: null,
          owner: null,
          schedules: [],
        },
      });
    }
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

export const selectSchedule = (schedule) => {
  return async function (dispatch) {
    dispatch({
      type: "SELECT_SCHEDULE",
      payload: {
        name: schedule,
      },
    });
  };
};

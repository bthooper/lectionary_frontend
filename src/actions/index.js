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
          url: `/lectionaries/${selected_lectionary.id}`,
          name: selected_lectionary.attributes.name,
          owner: selected_lectionary.attributes.owner,
          schedules: schedules,
        },
      });
    } else {
      dispatch({
        type: "SELECT_LECTIONARY",
        payload: {
          url: "",
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

export const selectSchedule = (url, schedule) => {
  return async function (dispatch) {
    // check if schedule is not empty otherwise
    // fetch the schedule data and seasons data for array and dispatch
    // else return empty
    //
    if (schedule !== "") {
      const response = await fetch(
        `http://localhost:3000/${url}/schedules/${schedule}`
      );
      const responseJSON = await response.json();
      const scheduleData = responseJSON.data;
      console.log(scheduleData);
      dispatch({
        type: "SELECT_SCHEDULE",
        payload: {
          url: `${url}/schedules/${schedule}`,
          name: scheduleData.attributes.name,
          seasons: [],
        },
      });
    } else {
      dispatch({
        type: "SELECT_SCHEDULE",
        payload: {
          url: ``,
          name: "",
          seasons: [],
        },
      });
    }
  };
};

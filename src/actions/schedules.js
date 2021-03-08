export const selectSchedule = (url, schedule) => {
  return async function (dispatch) {
    // check if schedule is not empty otherwise
    // fetch the schedule data and seasons data for array and dispatch
    // else return empty
    //
    if (schedule !== "") {
      const schedResponse = await fetch(
        `http://localhost:3000/${url}/schedules/${schedule}`
      );
      const schedResponseJSON = await schedResponse.json();
      const scheduleData = schedResponseJSON.data;
      const seasonsResponse = await fetch(
        `http://localhost:3000/${url}/schedules/${schedule}/seasons`
      );
      const seasonsResponseJSON = await seasonsResponse.json();
      const seasonsData = seasonsResponseJSON.data;
      dispatch({
        type: "SELECT_SCHEDULE",
        payload: {
          url: `${url}/schedules/${schedule}`,
          name: scheduleData.attributes.name,
          seasons: seasonsData,
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

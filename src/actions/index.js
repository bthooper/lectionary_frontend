export const selectLectionary = (lectionary) => {
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

    if (response.data) {
      dispatch({
        type: "FETCH_LECTIONARIES",
        payload: response.data,
      });
    }
    console.log(response);
    dispatch({
      type: "FETCH_LECTIONARIES",
      payload: [
        {
          attributes: {
            name: "Hooper's Unfetched Lectionary",
          },
        },
      ],
    });
  };
};

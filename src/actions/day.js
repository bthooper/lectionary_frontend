export const selectDay = (url) => {
  return async function (dispatch) {
    const readingsResponse = await fetch(
      `http://localhost:3000/${url}/readings`
    );
    const readingsJSON = await readingsResponse.json();
    const dayResponse = await fetch(`http://localhost:3000${url}`);
    const dayJSON = await dayResponse.json();
    const day = dayJSON.data;
    dispatch({
      type: "SELECT_DAY",
      payload: {
        url: url,
        name: day.attributes.name,
        readings: readingsJSON,
      },
    });
  };
};

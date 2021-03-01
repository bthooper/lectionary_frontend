export const seasonsReducer = (seasons = [], action) => {
  console.log("seasonsReducer: " + seasons);
  if (action.type === "FETCH_SEASONS") {
    return action.payload;
  }
  return seasons;
};

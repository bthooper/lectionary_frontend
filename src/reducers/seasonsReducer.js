export const seasonsReducer = (seasons = [], action) => {
  if (action.type === "FETCH_SEASONS") {
    return action.payload;
  }
  return seasons;
};

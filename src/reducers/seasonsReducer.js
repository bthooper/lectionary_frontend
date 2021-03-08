export const selectedSeasonReducer = (
  selected = { url: "", name: "", days: [] },
  action
) => {
  if (action.type === "SELECT_SEASON") {
    return action.payload;
  }
  if (
    action.type === "SELECT_SCHEDULE" ||
    action.type === "SELECT_LECTIONARY"
  ) {
    return { url: "", name: "", days: [] };
  }
  return selected;
};

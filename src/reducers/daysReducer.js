export const selectedDayReducer = (
  selected = { url: "", name: "", readings: [] },
  action
) => {
  if (action.type === "SELECT_DAY") {
    return action.payload;
  }
  if (
    action.type === "SELECT_SEASON" ||
    action.type === "SELECT_SCHEDULE" ||
    action.type === "SELECT_LECTIONARY"
  ) {
    return { url: "", name: "", readings: [] };
  }
  return selected;
};

export const selectedScheduleReducer = (
  selected = { url: "", name: "", seasons: [] },
  action
) => {
  if (action.type === "SELECT_SCHEDULE") {
    return action.payload;
  }
  if (action.type === "SELECT_LECTIONARY") {
    return { url: "", name: "", seasons: [] };
  }
  return selected;
};

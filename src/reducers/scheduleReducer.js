export const selectedScheduleReducer = (
  selected = { url: "", name: "", seasons: [] },
  action
) => {
  if (action.type === "SELECT_SCHEDULE") {
    return action.payload;
  }
  return selected;
};

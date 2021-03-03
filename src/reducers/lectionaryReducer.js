export const lectionaryReducer = (lectionaries = [], action) => {
  if (action.type === "FETCH_LECTIONARIES") {
    return action.payload;
  }
  return lectionaries;
};

export const selectedLectionaryReducer = (
  selected = { name: null, owner: null, schedules: [] },
  action
) => {
  if (action.type === "SELECT_LECTIONARY") {
    return action.payload;
  }
  return selected;
};

export const selectedScheduleReducer = (
  selected = { name: null, days: [] },
  action
) => {
  if (action.type === "SELECT_SCHEDULE") {
    return action.payload;
  }
  return selected;
};

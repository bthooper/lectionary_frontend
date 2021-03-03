import { combineReducers } from "redux";
import {
  lectionaryReducer,
  selectedLectionaryReducer,
  selectedScheduleReducer,
} from "./lectionaryReducer";
// import { seasonsReducer } from "./seasonsReducer";

export default combineReducers({
  lectionaries: lectionaryReducer,
  selected_lectionary: selectedLectionaryReducer,
  selected_schedule: selectedScheduleReducer,
  // selected_season: seasonsReducer,
  // selected_day: daysReducer,
});

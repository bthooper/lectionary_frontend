import { combineReducers } from "redux";
import {
  lectionaryReducer,
  selectedLectionaryReducer,
} from "./lectionaryReducer";
// import { seasonsReducer } from "./seasonsReducer";

export default combineReducers({
  lectionaries: lectionaryReducer,
  selected_lectionary: selectedLectionaryReducer,
  // selected_schedule: scheduleReducer,
  // selected_season: seasonsReducer,
  // selected_day: daysReducer,
});

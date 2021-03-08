import { combineReducers } from "redux";
import {
  lectionaryReducer,
  selectedLectionaryReducer,
} from "./lectionaryReducer";
import { selectedScheduleReducer } from "./scheduleReducer";
import { selectedSeasonReducer } from "./seasonsReducer";

export default combineReducers({
  lectionaries: lectionaryReducer,
  selected_lectionary: selectedLectionaryReducer,
  selected_schedule: selectedScheduleReducer,
  selected_season: selectedSeasonReducer,
  // selected_day: daysReducer,
});

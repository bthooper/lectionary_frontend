import { combineReducers } from "redux";
import {
  lectionaryReducer,
  selectedLectionaryReducer,
} from "./lectionaryReducer";
// import { seasonsReducer } from "./seasonsReducer";

export default combineReducers({
  lectionaries: lectionaryReducer,
  selected_lectioanry: selectedLectionaryReducer,
  // seasons: seasonsReducer,
});

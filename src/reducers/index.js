import { combineReducers } from "redux";
import {
  lectionaryReducer,
  selectedLectionaryReducer,
} from "./lectionaryReducer";

export default combineReducers({
  lectionaries: lectionaryReducer,
  selected_lectionary: selectedLectionaryReducer,
});

export default function lectionaryReducer(state = { items: [] }, action) {
  switch (action.type) {
    case "SELECT_LECTIONARY":
      console.log("SELECT_LECTIONARY reducer hit");
      console.log(state);
      return state;

    default: {
      console.log("Default reducer hit.");
      console.log(state);
      return state;
    }
  }
}

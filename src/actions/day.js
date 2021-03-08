export const selectDay = (e) => {
  return async function (dispatch) {
    e.preventDefault();
    alert(`Selected ${e.target.innerHTML}`)

    }
  }

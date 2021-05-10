import {SET_FILTER } from "../constants/constant";
const initialState = {
    todos: [],
    visibilityFilter: "SHOW_ALL"
  };
  
  const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_FILTER:
        return action.filter;
      default:
        return state;
    }
  };
  export default TodoReducer;
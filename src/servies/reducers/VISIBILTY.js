import {SET_FILTER } from "../constants/constant";
const initialState = {
    visibilityFilter: "All"
  };
  
  const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            let filterTodo = action.filter
           let array=state.todos;
            let filterItem;
         if(filterTodo === 'Completed')
         {
           filterItem = array.filter(todo => todo.completed);
         }
         else if(filterTodo === 'Uncompleted')
         {
           filterItem =array.filter(todo => !todo.completed);
         }
         else
         {
           filterItem =state.data
         }
        return {...state,todos:filterItem }
 
    }
  };
  export default TodoReducer;
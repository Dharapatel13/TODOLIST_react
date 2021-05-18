import { setFilter } from "../actions/action";
import { ADD_TO_LIST, Reset_Todo, SET_FILTER } from "../constants/constant";
import { DELETE_TO_LIST } from "../constants/constant";
import { CHECK_TO_LIST,Edit_TO_LIST } from "../constants/constant";
// import localForage from 'localforage';


const initialState={
    data:[],
    data2:[],
    Filter:'All'
}
export default function TodoItem(state=initialState,action){
  let { data, filter } = state;
    switch (action.type) {
        case ADD_TO_LIST:
            console.log(state)
            
            return state
    
        case DELETE_TO_LIST:
              const todos = state.data.filter((todo) => todo.id !== action.id)
            return {
              ...state,
              data: todos,data2:todos
            }
            case CHECK_TO_LIST:
              let arr=data,data2
              let  index = state.data.findIndex((todo) => todo.id === action.id);
              state.data[index].completed = !state.data[index].completed;
            
              return {
                data: [...state.data],data2:[...state.data]
              }

              case Edit_TO_LIST:
                let  i = state.data.findIndex((todo) => todo.id === action.id);
              state.data[i].data = action.data;
              return {
                data: [...state.data],data2:[...state.data]
              }
            
             

            
      case Reset_Todo:
        
            return initialState

            case SET_FILTER:
              let filterTodo = action.filter
              // let  index = state.data.findIndex((todo) => todo.id === action.id);
               let array2=[]
               let filterItem 
             let array=state.data;
              array2.push(array);
              console.log(array2)
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
          
        
           return {data:[...state.data]
            ,data2:filterItem }
               
    
        default:
            return state
            break;
    }
}

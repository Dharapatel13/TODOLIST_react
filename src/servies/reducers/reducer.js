import { setFilter } from "../actions/action";
import { ADD_TO_LIST, Reset_Todo, SET_FILTER } from "../constants/constant";
import { DELETE_TO_LIST } from "../constants/constant";
import { CHECK_TO_LIST,Edit_TO_LIST } from "../constants/constant";
// import localForage from 'localforage';


const initialState={
    data:[]
}
export default function TodoItem(state=initialState,action){
    switch (action.type) {
        case ADD_TO_LIST:
            console.log(state)
            return{data:[...state.data,{
                    data: action.data,
                    id: action.id,
                    // inpt:false,
                    completed:false
                  }
                ]
              
               
            }
    
        case DELETE_TO_LIST:
              const todos = state.data.filter((todo) => todo.id !== action.id)
            return {
              ...state,
              data: todos,
            }
            case CHECK_TO_LIST:
              let  index = state.data.findIndex((todo) => todo.id === action.id);
              state.data[index].completed = !state.data[index].completed;
              return {
                data: [...state.data]
              }

              case Edit_TO_LIST:
                let  i = state.data.findIndex((todo) => todo.id === action.id);
              state.data[i].data = action.data;
              return {
                data: [...state.data]
              }
            
             

            
      case Reset_Todo:
        
            return initialState

    
      
              
               
    
        default:
            return state
            break;
    }
}

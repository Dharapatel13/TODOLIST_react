import { ADD_TO_LIST } from "../constants/constant";
import { DELETE_TO_LIST } from "../constants/constant";



const initialState={
    data:[]
}
export default function TodoItem(state=initialState,action){
    switch (action.type) {
        case ADD_TO_LIST:
            console.log(state)
            return{...state,
                data:[
                  ...state.data,{
                    data: action.data,
                    id: action.id
                  }
                ]
               
            }
    
            case DELETE_TO_LIST:
              const todos = state.data.filter((todo) => todo.id !== action.id)
      return {
        ...state,
        data: todos,
      }
            
              
               
    
        default:
            return state
            break;
    }
}
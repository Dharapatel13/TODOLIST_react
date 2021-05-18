
import {ADD_TO_LIST} from "../constants/constant"
import {DELETE_TO_LIST,Reset_Todo,CHECK_TO_LIST,Edit_TO_LIST,SET_FILTER} from '../constants/constant'
let i=0;

export const AddToList=(data)=>{
    console.log(data);
return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore.collection("todolist").add({data:data,id:i++, completed: false})
    .then(() => {
        dispatch({
                type:ADD_TO_LIST,
                data:data,
            
            
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_TASK_ERR",
          err,
        });
      });
  };
}


export const DeleteToList=(id)=>{
    console.log(id)
return{
    
    type:DELETE_TO_LIST,
    id:id,
}
}
export const ResetTOList=()=>{

return{
    
    type:Reset_Todo,
    
   
}
}
export const checkTOList=(id)=>{

    return{
        type:CHECK_TO_LIST,
        
        id
      
        
       
    }
    }
    export const EditTOList=(data,id)=>{
console.log(data)
        return{
            
            type:Edit_TO_LIST,
            data,
            id

        }
        }
        export const setFilter = (filter) => ({
            type: SET_FILTER,
            filter
        });
        
       
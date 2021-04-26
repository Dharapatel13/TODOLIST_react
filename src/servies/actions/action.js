
import {ADD_TO_LIST} from "../constants/constant"
import {DELETE_TO_LIST,Reset_Todo,CHECK_TO_LIST} from '../constants/constant'
let i=0;
export const AddToList=(data)=>{
    console.log(data);
return{
    
    type:ADD_TO_LIST,
    data:data,
    id:i++,
    completed: false
}
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
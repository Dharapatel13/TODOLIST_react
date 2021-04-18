
import {ADD_TO_LIST} from "../constants/constant"
import {DELETE_TO_LIST} from '../constants/constant'
let i=0;
export const AddToList=(data)=>{
    console.log(data);
return{
    
    type:ADD_TO_LIST,
    data:data,
    id:Date.now()
}
}
export const DeleteToList=(id)=>{
    console.log(id)
return{
    
    type:DELETE_TO_LIST,
    id:id,
}
}
import { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import ListItem from "./list";
import {ResetTOList} from '../servies/actions/action'

function TODO(props) {
    const [todoValue,SetTodoValue]=useState('');
    const [todoList,SetTodoList]=useState([]);
console.log(props.todos);
    const TodoItem=(e)=>
    {
        SetTodoValue(e.target.value)
    }
    //  const dtlBtn=(id)=>{
        
    //         const  list=JSON.parse(localStorage.getItem('todos'));
    //         console.log(list[id])
    //         console.log(todoList)
    //         if(todoList[id]===list[id])
    //         {
    //             alert("susscess fully deleted item")
                    
    //             window.location.reload();
    //         }
    //         localStorage.setItem("todos", JSON.stringify(list))
       
    // }
   

  const keyPress=(e)=>{
      if(e.key==="Enter")
      {
        if(todoValue === (""))
        {
            alert("enter the value!!");
        }
        else{
           
          
            props.AddToListHandler(todoValue)
            SetTodoValue("");
            
        }
       
     
      }
  }
   
  return (
   <>
<div className="m-md-5 m-1 todoItems">
   <div className="row justify-content-center">
        <div className="col-md-8 pb-4">
        <input 
            type="text" 
            placeholder="What you Want to Do....!" 
            className="form-control h-100"
            onChange={TodoItem} name='userInpt' 
            value={todoValue} 
            onKeyPress={keyPress}>
        </input>
       </div>

       <div className="col-md-auto">
                <div className="row">
                    <div className="col-auto">
                        <Button
                            variant="contained"
                            color="primary"
                            className="h-100"
                            onClick={(e)=>{ e.preventDefault();
                                            props.AddToListHandler(todoValue);
                                            SetTodoValue('');
                                         }}  >
                            ADD
                        </Button>
                    </div>
                    <div className="col-auto">
                        <Button
                            variant="contained"
                            color="primary"
                            className="h-100"
                            onClick={(e)=> props.dispatch(ResetTOList())}
                        >
                            Reset
                        </Button>
                     </div>
                </div>
       </div>

       
   </div>
   <div className="row  p-3">
            <div className="col p-0">
            <div className=" ">
            <ul className="list-inline  ">
                  {props.todos.map((todo,index)=>(
                  <ListItem 
                  text={todo.data}  
                  key={index} 
                  id={todo.id} 
                  cmpt={todo.completed}
                  />
                  ))} 
            </ul>
            </div>
            </div>
            
    </div>
</div>
   
   </>
  );
}
const mapStateToProps=state=>({
    todos:state.todos.data
})

export default connect(mapStateToProps)(TODO);
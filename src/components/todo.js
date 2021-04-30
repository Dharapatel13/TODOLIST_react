import { useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import ListItem from "./list";
import swal from "sweetalert";  
import {ResetTOList} from '../servies/actions/action'

function TODO(props) {
    const [todoValue,SetTodoValue]=useState('');
    
console.log(props.todos);
    const TodoItem=(e)=>
    {
        SetTodoValue(e.target.value)
    }
    
   

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
  const allClrClcik=()=>{
    swal({
      title: "Are you sure?",
      text: "Once Reset, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        props.dispatch(ResetTOList())
        swal("Reset successfully!", {
          icon: "success",
        });
      }
      //  else {
      //   swal("Your ");
      // }
    });
  }
   
  return (
   <>
<div className="m-md-5 m-1 todoItems">
   <div className="row justify-content-center">
        <div className="col-sm-8 pb-4">
        <input 
            type="text" 
            placeholder="What you Want to Do....!" 
            className="form-control "
            onChange={TodoItem} name='userInpt' 
            value={todoValue} 
            onKeyPress={keyPress}
           
            >
        </input>
       </div>

       <div className="col-sm-auto">
                <div className="row justify-content-center">
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
                            onClick={allClrClcik}
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
import { useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import ListItem from "./list";
import swal from "sweetalert";  
import {ResetTOList, setFilter} from '../servies/actions/action'
import Dropdown from './filter'


function TODO(props) {
    const [todoValue,SetTodoValue]=useState('');
    const [error,setError]=useState('');
   

    let filteredList = [];
  if (props.filter === 'all') {
    filteredList = props.todos;
  } else if (props.filter === 'uncompleted') {
    filteredList = props.todos.filter(todo => !todo.cmpt);
  } else if (props.filter === 'completed') {
    filteredList = props.todos.filter(todo => todo.cmpt);
  }
console.log(props.todos);
    const TodoItem=(e)=>
    {
        SetTodoValue(e.target.value)
    }
    
   const Valid=()=>{
     if(todoValue===("")){
       setError("enter some todo item in list");

     }

   }

  const keyPress=(e)=>{

      if(e.key==="Enter")
      {
        setError("");
        if(todoValue === (""))
        {
          Valid();
        
        }
     
       else {
        props.AddToListHandler(todoValue);
        SetTodoValue('');
            
        }
       
     
      }
  }

  const AddClick=(e)=>{
      setError("");
      if(todoValue === (""))
      {
        Valid();
      
      }
     else {
          props.AddToListHandler(todoValue)
          SetTodoValue("");
          
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
        <span className="text-danger "><b>{error}</b></span>
       </div>

       <div className="col-sm-auto">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <Button
                            variant="contained"
                            color="primary"
                            className="h-100"
                            onClick={AddClick}  >
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
                     <div className="col-auto">
                        <Dropdown/>
                     </div>
                </div>
       </div>

       
   </div>
   
   <div className="row  p-3">
            <div className="col p-0">
            {props.todos.length != 0  ? ( 
              <>
         
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
            </>
           ):(
             <div className="row justify-content-center">
               <div className="col  text-center">
               <h2 className="text-dark"><b>ADD Somthing in TodoList</b></h2>
           <img src="https://images.squarespace-cdn.com/content/v1/5bff12f036099b60838b10f7/1561757621406-SVJ2YX8DXFBLXEO1RBBS/ke17ZwdGBToddI8pDm48kMtiXMEMZ8ID8MVhA-T_Qc9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PITnpAyX_dGZoSaTWLsWN0zAj5xdGjLNRKp-vUPPLOxh8/book_scene1.gif?format=500w" className="img-fluid"/>
           
  </div>
   </div>
           )}
            </div>
            
    </div>
 
</div>
   
   </>
  );
}
const mapStateToProps=state=>({
    todos:state.todos.data,
    filter: state.todos.filter,
})

export default connect(mapStateToProps)(TODO);
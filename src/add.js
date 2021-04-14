import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import ListItem from "./list";

function TODO() {
    const [todoValue,SetTodoValue]=useState('');
    const [todoList,SetTodoList]=useState([]);

    const TodoItem=(e)=>
    {
        SetTodoValue(e.target.value)
    }
     const dtlBtn=(id)=>{
        
            const  list=JSON.parse(localStorage.getItem('todos'));
            console.log(list[id])
            console.log(todoList)
            if(todoList[id]===list[id])
            {
                alert("susscess fully deleted item")
                list.splice(id, 1);
                window.location.reload();
            }
            localStorage.setItem("todos", JSON.stringify(list))
       
    }
   const reSet=()=>{
       localStorage.clear('todos');
       SetTodoList([])
   }
   

   useEffect(() => {
    const items = JSON.parse(localStorage.getItem('todos'));
    if (items) {
      SetTodoList(items);
    }
  },[]);
  const keyPress=(e)=>{
      if(e.key==="Enter")
      {
        if(todoValue === (""))
        {
            alert("enter the value!!");
        }
        else{
           
          
                SetTodoList((todoList)=>{
                    return[...todoList,todoValue] 
                
                });
          
          
          
            SetTodoValue("");
            
        }
       
        localStorage.setItem("todos", JSON.stringify([...todoList,todoValue]));
      }
  }
    const AddTodo=(e)=>
    {
       
        if(todoValue === (""))
        {
            alert("enter the value!!");
        }
        else{
           
          
                SetTodoList((todoList)=>{
                    return[...todoList,todoValue] 
                
                });
          
          
          
            SetTodoValue("");
            
        }
       
        localStorage.setItem("todos", JSON.stringify([...todoList,todoValue]));
        // const list=JSON.parse(localStorage.getItem('todo'));
        // console.log(localStorage.getItem('todo'))
    };
  return (
   <>
<div className="m-5 todoItems">
   <div className="row justify-content-center">
       <div className="col-md-8">
       <input type="text" placeholder="What you Want to Do....!" className="form-control h-100" onChange={TodoItem} value={todoValue} onKeyPress={keyPress}></input>
       </div>

       <div className="col-md-auto">
                <div className="row">
                    <div className="col-auto">
                        <Button
                            variant="contained"
                            color="primary"
                            className="h-100"
                            onClick={AddTodo}  >
                            ADD
                        </Button>
                    </div>
                    <div className="col-auto">
                        <Button
                            variant="contained"
                            color="primary"
                            className="h-100"
                           onClick={reSet} 
                        >
                            Reset
                        </Button>
                     </div>
                </div>
       </div>

       
   </div>
   <div className="row  p-3">
            <div className="col-12">
            <div className="container  p-5 ">
            <ul className="list-inline  ">
         
              {todoList.map((val,index)=>{
                  return  <ListItem id={index} key={index} text={val} onSelect={dtlBtn}  />;
              })
              } 
            </ul>
            </div>
            </div>
            
        </div>
</div>
   
   </>
  );
}

export default TODO;
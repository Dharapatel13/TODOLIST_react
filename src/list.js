import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import {DeleteToList} from './servies/actions/action'
 import { connect } from 'react-redux';


function List(props) {
    const [line,setLine]=useState(false);
    const checkBtn=()=>{
        if(line===true)
         {
            setLine(false)

          }
        else
        {
            setLine(true);
        }
      
    }
 const  deleteList=(e,index)=>{ 
    props.deleteList(index);}
   
   
  return (
   <>

   <li className=" pl-3 p-2 m-3  item" style={{textDecoration:line ?"line-through" : "none", backgroundColor:  '#00000013',
 fontSize: '1.5em',
 boxShadow: '10px 10px grey'}}>
 
 <div className="row justify-content-center "> 
     <div className="col">
      
       <span> {props.text} </span>
    
     </div>
     <div className="col-auto">
     <Button onClick={checkBtn}  >
        <CheckIcon className="text-success"/>
          </Button>
     </div>
     <div className="col-auto">
     <Button  onClick={() =>{ alert(props.id);
       props.dispatch(DeleteToList(props.id))}
      }>
        <DeleteIcon className="text-danger"/>
          </Button>
     </div>
     
    
</div>

</li>
  
  
   </>
  );
}

const mapStateToProps=state=>({
  todolist:state.todos.data
})



export default connect(mapStateToProps) (List);

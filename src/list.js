import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { useState } from 'react';


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
     <Button  onClick={(e)=>{props.onSelect(props.id);}}>
        <DeleteIcon className="text-danger"/>
          </Button>
     </div>
     
    
</div>

</li>
  
  
   </>
  );
}

export default List;

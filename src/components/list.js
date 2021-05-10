import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import Edit from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import swal from "sweetalert";  
import Swal from "sweetalert2"; 
import {checkTOList, DeleteToList,EditTOList} from '../servies/actions/action'
 import { connect } from 'react-redux';
import { useState } from 'react';
import { Save } from '@material-ui/icons';


function List(props) {
  const [todo,setTodo]=useState(props.text)
  const [edit,setedit]=useState(false)
    const DtlClcik=()=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this item!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          props.dispatch(DeleteToList(props.id))
          swal("Deleted successfully!", {
            icon: "success",
          });
        }
        //  else {
        //   swal("Your ");
        // }
      });
  
     
    }
    const editinpt = async () => {
      const { value: text } = await Swal.fire({
        title: 'Update Your TodoItem ',
        input: 'text',
       inputValue:props.text,
      
       
      
      })
    
      if (text) {

        Swal.fire({
          title: "yeah!!!",
          text: "successfully Update Todo",
          icon: "success",
          
      //     backdrop: `
      //     #607d8b6b
      //    url("http://pa1.narvii.com/7206/7ae3453ffbdcc53495a7d046d625f949241e6bedr1-370-300_00.gif")
      //    left top
      //    no-repeat
      //  `
        })
        props.dispatch(EditTOList(text,props.id))
      }
    
  }
        // props.dispatch(EditTOList(text,props.id))
   
  return (
   <>

   <li className=" pl-3 p-2 m-3  item" style={{ textDecoration: props.cmpt ? "line-through" : "none", backgroundColor:  '#00000013',
 fontSize: '1.5em',
 boxShadow: '10px 10px grey'}}>
 
 <div className="row justify-content-center p-0 " > 
     <div className="col-12 text-center text-md-left col-md pl-xs-3 ">
      
       <span className="text-break"> {props.text} </span>
    
     </div>
     <div className="col-auto p-0">
     <Button onClick={(e)=>{console.log(props.cmpt)
       props.dispatch(checkTOList(props.id))} }  >
        <CheckIcon className="text-success"/>
          </Button>
     </div>
     <div className="col-auto ">
     <Button  onClick={editinpt }   >
        <Edit className="text-primary"/>
          </Button>
          
     </div>
     <div className="col-auto ">
     <Button  onClick={DtlClcik}>
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
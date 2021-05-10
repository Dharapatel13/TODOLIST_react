import { useState} from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import { setFilter} from '../servies/actions/action'
import {connect} from 'react-redux'
const Filter =(props)=>{
    const [text,settext]=useState('All');

    const select=(e)=>{
        settext(e);
        props.dispatch(setFilter(e))
        if(e=='All')
        {
          return props.todo
        }
        else if(e=='Completed')
        {
          return  (props.todos.filter(t => t.cmpt)); 
        }
        else
        {
      
        }
      alert(e);
      }
    return(
        <>
        <Dropdown onSelect={select}>
        <Dropdown.Toggle  variant="info"  id="dropdown-basic">
          {text}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
          <Dropdown.Item eventKey="Uncompleted">Uncompleted</Dropdown.Item>
   
        </Dropdown.Menu>
      </Dropdown>
        </>
    )
      
    
}
const mapStateToProps=state=>({
    todos:state.todos.data
})

export default connect(mapStateToProps)(Filter);

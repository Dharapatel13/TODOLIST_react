import { useState} from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import { setFilter} from '../servies/actions/action'
import {connect} from 'react-redux'
const Filter =(props)=>{
    
    return(
        <>
        <Dropdown onSelect={props.select}>
        <Dropdown.Toggle  variant="info"  id="dropdown-basic">
          {props.filter}
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
    todos:state.Data.data
})

export default connect(mapStateToProps)(Filter);

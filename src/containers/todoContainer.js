import {connect} from 'react-redux'
import TODO from '../components/todo';
import {AddToList} from '../servies/actions/action'



const mapStateToProps=state=>({
    todos:state.todos.data
})
const mapDispatchToProps=dispatch=>({
    AddToListHandler:data=> dispatch(AddToList(data)),
    // deleteList: index =>dispatch(DeleteToList(index))

})




export default connect(mapStateToProps,mapDispatchToProps)(TODO);
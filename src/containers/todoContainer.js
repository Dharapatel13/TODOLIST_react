import {connect} from 'react-redux'
import TODO from '../components/todo';
import {AddToList,DeleteToList} from '../servies/actions/action'
import TodoItem from '../servies/reducers/reducer';


const mapStateToProps=state=>({
    todos:state.ListData.data
})
const mapDispatchToProps=dispatch=>({
    AddToListHandler:data=> dispatch(AddToList(data)),
    // deleteList: index =>dispatch(DeleteToList(index))

})




export default connect(mapStateToProps,mapDispatchToProps)(TODO);
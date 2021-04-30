import logo from './logo.svg';
import './App.css';
import TODO from './containers/todoContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
   <div className="container-fluid ">
<p className="h2 text-center p-3 mt-4 text-info">TODO MANAGER</p>
   <TODO/>

   </div>
   </>
  );
}

export default App;

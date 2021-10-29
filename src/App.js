import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddUser from './pages/AddUser/AddUser';
import { BrowserRouter } from 'react-router-dom';
import Servic from './pages/Servic/Servic';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <AddUser></AddUser>
   <Servic></Servic>
   </BrowserRouter>
    </div>
  );
}

export default App;

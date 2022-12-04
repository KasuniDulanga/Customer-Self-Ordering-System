import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from '../src/Component/Home/Home';
import Login from '../src/Component/Login/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListEmployee from './Component/AdminPage/ListEmployee';
import AddEmployee from './Component/AdminPage/AddEmployee';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path ="/" element={<Home />}></Route>
          <Route exact path ="/login" element={<Login />}></Route>
          <Route exact path ="/admin" element={<ListEmployee/>}></Route>
          <Route exact path ="/add-employee" element={<AddEmployee/>}></Route>
          <Route exact path ="/edit-employee/:id" element={<AddEmployee/>}></Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Home from '../src/Component/Home/Home';
import Login from '../src/Component/Login/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListEmployee from './Component/AdminPage/ListEmployee';
import AddEmployee from './Component/AdminPage/AddEmployee';
import MenuPage from './Component/MenuPage/MenuPage';
import CookPage from './Component/CookPage/CookPage';
import Aboutus from './Component/About/Aboutus';
import Event from './Component/Events/Event';
import AddMeals from './Component/CookPage/AddMeals';
import OrderDetails from './Component/OrderDetails/OrderDetails';

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
          
          <Route exact path ="/cook" element={<CookPage/>}></Route>
          <Route exact path ="/add-meal" element={<AddMeals/>}></Route>
          <Route exact path ="/edit-meal/:id" element={<AddMeals/>}></Route>
          
          <Route exact path ="/menu" element={<MenuPage/>}></Route>
          <Route exact path ="/aboutus" element={<Aboutus/>}></Route>
          <Route exact path ="/events" element={<Event/>}></Route>

          <Route exact path ="/orderdetails" element={<OrderDetails/>}></Route>

        </Routes>

      </Router>

    </div>
  );
}

export default App;

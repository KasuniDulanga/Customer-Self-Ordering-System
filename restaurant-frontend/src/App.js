import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Home from '../src/Component/Home/Home';
import Login from '../src/Component/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React, useState } from 'react';
import AddEmployee from './Component/AdminPage/AddEmployee';
import MenuPage from './Component/MenuPage/MenuPage';
import CookPage from './Component/CookPage/CookPage';
import Aboutus from './Component/About/Aboutus';
import Event from './Component/Events/Event';
import AddMeals from './Component/AdminPage/AddMeals';
import OrderDetails from './Component/OrderDetails/OrderDetails';
import Admin from './Component/AdminPage/Admin';
import Waiter from './Component/WaiterPage/Waiter';
import OrderContext from './Component/OrderDetails/OrderContext';

function App() {
  const [orderctx, setorderctx] = useState(null)
  return (
    <div className="App">
      <Router>
        <OrderContext.Provider value={{ orderctx, setorderctx }}>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>

            <Route exact path="/admin/:id" element={<Admin />}></Route>
            <Route exact path="/add-employee" element={<AddEmployee />}></Route>
            <Route exact path="/edit-employee/:id" element={<AddEmployee />}></Route>
            <Route exact path="/add-meal" element={<AddMeals />}></Route>
            <Route exact path="/edit-meal/:id" element={<AddMeals />}></Route>

            <Route exact path="/cook/:id" element={<CookPage />}></Route>
            <Route exact path="/waiter/:id" element={<Waiter />}></Route>


            <Route exact path="/aboutus" element={<Aboutus />}></Route>
            <Route exact path="/events" element={<Event />}></Route>


            <Route exact path="/menu" element={<MenuPage />}></Route>
            <Route exact path="/orderdetails" element={<OrderDetails />}></Route>

          </Routes>
        </OrderContext.Provider>
      </Router>

    </div>
  );
}

export default App;

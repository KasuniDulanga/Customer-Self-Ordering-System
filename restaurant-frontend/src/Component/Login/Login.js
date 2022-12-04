import React, { Fragment } from 'react';
import logo from '../Images/logo.png';
import loginImg from '../Images/loginImg.jpg';
import NavbarComp from '../Navbar/NavbarComp';
import './Login.css';

import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const NavigateToAdminPage = () => {
    navigate('/admin');
  };

  return (
    <Fragment>
      <NavbarComp/>
      <div className="loginBody wrapper bg-white">
      <div className="wrapper bg-white">
        <div className="h2 text-center">Login</div>
        <form className="pt-3">
            <div className="form-group py-2">
                <div className="input-field">
                    <span className="far fa-user p-2"></span>
                    <input type="text" placeholder="Username" required className=""></input>
                </div>
            </div>
            <div className="form-group py-1 pb-2">
                <div className="input-field">
                    <span className="fas fa-lock p-2"></span>
                    <input type="text" placeholder="Password" required className=""></input>
                    <button className="btn bg-white text-muted">
                        <span className="far fa-eye-slash"></span>
                    </button>
                </div>
            </div>
            <div className="d-flex align-items-start">
                <div className="remember">
                    <label className="option text-muted"> Remember me
                        <input type="radio" name="radio"></input>
                        <span className="checkmark"></span>
                    </label>
                </div>
                
            </div>
            <button className="btn btn-block text-center my-3" onClick={NavigateToAdminPage}>Log in</button>
            
        </form>
    </div>
    </div>
    </Fragment>
  );
}

export default Login;
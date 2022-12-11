import React, { Fragment } from 'react';
import NavbarComp from '../Navbar/NavbarComp';
import './Login.css';


function Login() {


 
  return (
    <Fragment>
      <NavbarComp/>
      <div className="loginBody wrapper bg-white">
      <div className="wrapper bg-white">
        <div className="h3 text-center">Login To Your Account</div>
        <form className="pt-3">
            <div className="form-group py-2">
                <div className="input-field">
                    <span className="far fa-user p-2"></span>
                    <input type="email" placeholder="Email" required className=""></input>
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
            <button className="btn btn-block text-center my-3">Log in</button>
            
        </form>
    </div>
    </div>
    </Fragment>
  );
}

export default Login;
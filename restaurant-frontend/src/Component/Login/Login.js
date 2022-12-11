import React, { Fragment, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import NavbarComp from '../Navbar/NavbarComp';
import './Login.css';


function Login() {

    const[loginDetails, setLoginDetails] =useState({
        useremail:'',
        password:''
    })

    //if we change email and password 
    const handleChange=(event,field) =>{
        let actualValue = event.target.value
        setLoginDetails({
            ...loginDetails,[field]:actualValue
        })
    }

    const handleReset=() =>{
        setLoginDetails({
            useremail:"",
            password:"",
        });
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(loginDetails);

        // Validation
        if(loginDetails.useremail.trim()==='' || loginDetails.password.trim()==='' ){
            toast.error("Useremail or Password is required !!", {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }
    }


 
  return (
    <Fragment>
      <NavbarComp/>
      <div className="loginBody wrapper bg-white">
      <div className="wrapper bg-white">
        <div className="h3 text-center">Login To Your Account</div>
        <form className="pt-3" onSubmit={handleFormSubmit}>
            <div className="form-group py-2">
                <div className="input-field">
                    <span className="far fa-user p-2"></span>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={loginDetails.useremail}
                        onChange={(e) =>handleChange(e,'useremail')}
                        className=""></input>
                </div>
            </div>
            <div className="form-group py-1 pb-2">
                <div className="input-field">
                    <span className="fas fa-lock p-2"></span>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={loginDetails.password}
                        onChange={(e) =>handleChange(e,'password')}
                        className="">

                    </input>
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
            <button type="submit" className="btn btn-block text-center my-3 mx-2">Login</button>
            <button type="reset" className="btn btn-block text-center my-3" onClick={handleReset}>Reset</button>
            <ToastContainer/>
            
        </form>
    </div>
    </div>
    </Fragment>
  );
}

export default Login;
import React, { Fragment, useState } from 'react';
import {EyeInvisibleOutlined ,EyeOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import NavbarComp from '../Navbar/NavbarComp';
import './Login.css';
import UserLoginService from '../Services/UserLoginService';
import { useNavigate} from 'react-router-dom';

function Login() { 
    const[visibility,setVsibility] =useState(true);
    const navigate = useNavigate();
    
    const[loginDetails, setLoginDetails] =useState({
        email:'',
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
            email:"",
            password:"",
        });
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(loginDetails);

        // Validation
        if(loginDetails.email.trim()==='' || loginDetails.password.trim()==='' ){
            
            toast.error("Useremail or Password is required !!", {
                position: toast.POSITION.TOP_CENTER
            });
            
            return;
        }

        else{
            //get roleid and employeeid as a response
            UserLoginService.login(loginDetails).then((response) => {
                console.log(response.data)
                
                if(response.data.roleId === 1){
                    navigate('/admin/' + response.data.employeeId);
                }
                else if(response.data.roleId === 2){
                    navigate('/cook/' + response.data.employeeId);
                }
                else if(response.data.roleId === 3){
                    navigate('/waiter/'+ response.data.employeeId);
                }
                else if(response.data.roleId === 0){
                    handleReset();
                    toast.error("Useremail or Password is Incorrect !!", {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
                

            }).catch(error => {
                console.log(error)
            })
        }
    }

    
 
  return (
    <Fragment>
      <NavbarComp
            link1 ="Home"
            link3 ="Events" />
      <div className="loginBody wrapper bg-white">
      <div className="wrapper bg-white">
        <div className="h3 text-center">       Login To <br></br>Your Account    </div>
        <form className="pt-3" >
            <div className="form-group py-2">
                <div className="input-field">
                    <span className="far fa-user p-2"></span>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={loginDetails.email}
                        onChange={(e) =>handleChange(e,'email')}
                        className=""></input>
                </div>
            </div>
            <div className="form-group py-1 pb-2">
                <div className="input-field">
                    <span className="fas fa-lock p-2"></span>
                    <input 
                        type={visibility ? "password" : "text" } 
                        placeholder="Password" 
                        value={loginDetails.password}
                        onChange={(e) =>handleChange(e,'password')}
                        className="">

                    </input>
                    <div className='eye' onClick={()=>setVsibility(!visibility)}>
                    {
                        visibility ?  <EyeInvisibleOutlined/> :<EyeOutlined/>
                    }
                    </div>
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
            <button type="submit" className="btn btn-block text-center my-3 mx-2" onClick={handleFormSubmit}>Login</button>
            <button type="reset" className="btn btn-block text-center my-3" onClick={handleReset}>Reset</button>
            <ToastContainer/>
            
        </form>
    </div>
    </div>
    </Fragment>
  );
}

export default Login;
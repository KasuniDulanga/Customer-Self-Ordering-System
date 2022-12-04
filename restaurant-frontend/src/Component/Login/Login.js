import React, { Fragment } from 'react';
import logo from '../Images/logo.png';
import loginImg from '../Images/loginImg.jpg';
import NavbarComp from '../Navbar/NavbarComp';
import './Login.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const NavigateToAdminPage = () => {
    navigate('/admin');
  };

  return (
    <Fragment>
    <NavbarComp />
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow >

          <MDBCol md='5'>
            <MDBCardImage src={loginImg} alt="login form" className='rounded-start w-100 h-75'/>
          </MDBCol>

          <MDBCol md='7'>
            <MDBCardBody className='d-flex flex-column '>

              <div className='d-flex flex-row mt-2'>
                <MDBCardImage className='logo' src={logo}></MDBCardImage>
                <span className="logoname h3 fw-bold mb-0">MacFood</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
              
            
              <MDBBtn  className="loginbtn btn px-5" size='lg' onClick={NavigateToAdminPage}>Login</MDBBtn>
              
              {/* <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p> */}

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
    </Fragment>
  );
}

export default Login;
import { Fragment, useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Nav.css';
import { useNavigate } from 'react-router-dom';
import LogoutModal from './LogoutModal';


const Navpage = () => {
  const navigate = useNavigate();
  const [MsgIsShown, setMsgIsShown] = useState(false);

  const gotoLoginPage = () => {

    navigate('/login');

  };

  const showCartHandler = () => {
    setMsgIsShown(true);
  };
  const hideMsgHandler = () => {
    setMsgIsShown(false);
  };

  return (
    <Fragment>
      
      <Navbar className="navbar" variant='dark' expand="lg">
        <Container className ="navbarContainer">
          <Navbar.Brand href="/">MacFood</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-1 mb-lg-0">

              <Nav.Link className="navlink" as={Link} to="/">Home</Nav.Link>
              {/* <Nav.Link className="navlink" as={Link} to="/aboutus">AboutUs</Nav.Link> */}
              <Nav.Link className="navlink" as={Link} to="/events">Events</Nav.Link>
              <Nav.Link className="navlink" as={Link} onClick={showCartHandler}>Logout</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {MsgIsShown && <LogoutModal onClose={hideMsgHandler}>
        <div className= "message">
          <span>Are sure you want to logout?</span>
        </div>
        <div className="close">
          <button className='button--alt' onClick={gotoLoginPage}>
            Yes
          </button>
          <button className='button' onClick={hideMsgHandler}>No</button>
        </div>
      </LogoutModal>}
    </Fragment>
  );
};

export default Navpage;
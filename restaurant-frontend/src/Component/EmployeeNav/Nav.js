import { Fragment, useState } from 'react';
import Modal from '../MenuPage/UI/Modal';
import './Nav.css';
import NavbarComp from '../Navbar/NavbarComp';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
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
      <NavbarComp
        link1="Home"
        link2="AboutUs"
        link3="Events"
        link4="Logout"
        logout={showCartHandler} />
      {MsgIsShown && <Modal onClose={hideMsgHandler}>
        <div className= "message">
          <span>Are sure you want to logout?</span>
        </div>
        <div className="close">
          <button className='button--alt' onClick={gotoLoginPage}>
            Yes
          </button>
          <button className='button' onClick={hideMsgHandler}>No</button>
        </div>
      </Modal>}
    </Fragment>
  );
};

export default Nav;
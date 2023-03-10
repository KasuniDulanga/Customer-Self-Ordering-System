import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './LogoutModal.module.css';

const Backdrop1 = (props) => {
  return <div className={classes.backdrop1} onClick={props.onClose}/>;
};

const ModalOverlay1 = (props) => {
  return (
    <div className={classes.modal1}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement2 = document.getElementById('overlays1');

const LogoutModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop1 onClose={props.onClose} />, portalElement2)}
      {ReactDOM.createPortal(
        <ModalOverlay1>{props.children}</ModalOverlay1>,
        portalElement2
      )}
    </Fragment>
  );
};

export default LogoutModal;

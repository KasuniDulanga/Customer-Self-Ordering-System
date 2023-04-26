import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from '../../EmployeeNav/LogoutModal.module.css';

const Backdrop2 = (props) => {
  return <div className={classes.backdrop1} onClick={props.onClose}/>;
};

const ModalOverlay2 = (props) => {
  return (
    <div className={classes.modal1}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement3 = document.getElementById('overlays2');

const ConfirmModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop2 onClose={props.onClose} />, portalElement3)}
      {ReactDOM.createPortal(
        <ModalOverlay2>{props.children}</ModalOverlay2>,
        portalElement3
      )}
    </Fragment>
  );
};

export default ConfirmModal;
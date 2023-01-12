import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link className={classes.title} to = "/"><h1>MacFood</h1></Link>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;

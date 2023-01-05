import { Fragment } from 'react';
import '../MenuPageHeader/MenuHeader.css';
import CartIcon from '../Cart/CartIcon';

const Header = (props) => {

    

    return (
        <Fragment>
            <header className="header">
                <span className='name'>MacFood</span>
                <button className="button" onClick={props.onClick}>
                    <span className="icon">
                        <CartIcon />
                    </span>
                    {/* <span>Cart</span> */}
                    <span className="badge">1</span>
                </button>
            </header>


        </Fragment>
    );
};

export default Header;

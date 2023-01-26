import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (

    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount :</span>
        <span>{totalAmount}</span>
      </div>
      <form>
      <div className={classes.tableNo}>
        <span><label>Table No :</label></span>
        <span><input
          type="number"
          min={0}
          max={50}
          required
        >
        </input></span>


      </div>
      <div className={classes.cutomerDetails}>
        <span><label>Name :</label></span>
        <span><input
          type="text"
          placeholder="Enter name"
          required
        >
        </input></span>
      </div>
      <div className={classes.cutomerDetails}>
        <span><label>Mobile :</label></span>
        <span><input
          type="text"
          placeholder="Enter phone number"
          required
        >
        </input></span>
      </div>
      
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button type="submit" className={classes.button}>Order</button>}
      </div>
      </form>
    </Modal >

  );
};

export default Cart;

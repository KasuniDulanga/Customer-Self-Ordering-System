import { React, Fragment, useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import OrderService from '../../Services/OrderService';
import { useNavigate } from 'react-router-dom';
import OrderContext from '../../OrderDetails/OrderContext';


const Cart = (props) => {
  const [tableNo, setTableNo] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderDescription, setOrderDescription] = useState('');
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const { setorderctx } = useContext(OrderContext);
  const orderMeal = (e) => {
    e.preventDefault();
    const order = { cartItems: cartCtx.items, customerPhone, customerName, tableNo, orderDescription }

    if (tableNo.trim() === '' || customerName.trim() === '' || customerPhone.trim() === '') {
      toast.error("table no or name or phone number is required !!", {
        position: toast.POSITION.TOP_CENTER
      });


    }
    else {
      //Order id get as a response
      OrderService.placeOrder(order).then((response) => {
        console.log(response.data);

        if (response.data != null) {
            localStorage.setItem("macfood_order_ID",`${response.data}`)
            OrderService.getOrderDetails(response.data).then((orderRes) => {
              setorderctx(orderRes.data);
              navigate('/orderdetails',{ replace: true });
            }).catch(error => {
              console.log(error.orderRes.data)
            })
          
        }


      }).catch(error => {
        console.log(error.response.data)
      })
    }

    console.log(order);


  }

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.mealId}
          name={item.mealName}
          quantity={item.quantity}
          price={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.mealId)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Fragment>

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
              value={tableNo}
              onChange={(e) => setTableNo(e.target.value)}
              required
            >
            </input></span>


          </div>
          <div className={classes.cutomerDetails}>
            <span><label>Name :</label></span>
            <span><input
              type="text"
              placeholder="Enter name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            >
            </input></span>
          </div>
          <div className={classes.cutomerDetails}>
            <span><label>Mobile :</label></span>
            <span><input
              type="text"
              placeholder="Enter phone number"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              required
            >
            </input></span>
          </div>

          <div className={classes.cutomerDetails}>
            <span><label>Extra Note :</label></span>
            <span><input
              type="text"
              placeholder=" "
              value={orderDescription}
              onChange={(e) => setOrderDescription(e.target.value)}
              required
            >
            </input></span>
          </div>

          <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>
              Close
            </button>
            {hasItems && <button type="submit" className={classes.button} onClick={orderMeal}>Checkout</button>}
          </div>
        </form>
      </Modal >
      <ToastContainer />

    </Fragment>
  );
};

export default Cart;

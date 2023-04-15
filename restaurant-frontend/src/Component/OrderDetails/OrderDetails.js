import React, { Fragment, useContext, useEffect } from 'react'
import OrderContext from './OrderContext';
import classes from './OrderDetails.module.css';
// import classes from '../MenuPage/Cart/Cart.module.css'
import { Nav } from 'react-bootstrap';
import Notification from '../Navbar/Notification';
import { Link, useNavigate } from 'react-router-dom';
import OrderedMealItem from './OrderedMealItem';
import OrderService from '../Services/OrderService';
import NavbarComp from '../Navbar/NavbarComp';

export default function OrderDetails(props) {
  const { orderctx, setorderctx } = useContext(OrderContext);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
    const orderId = localStorage.getItem("macfood_order_ID")
    console.log(parseInt(orderId));
    if(orderId){
    OrderService.getOrderDetails(parseInt(orderId)).then((orderRes) => {
      setorderctx(orderRes.data);

      if(orderRes.data.status === "billed"){
        localStorage.removeItem("macfood_order_ID");
        navigate('/',{ replace: true })
      }


    }).catch(error => {
      console.log(error.orderRes.data)
    })
  }
  }, 1000);
  
  return () => clearInterval(interval);

  });

  let totalAmount = 0;
  let orderMealDetails = (<div></div>);
  if (orderctx) {
    totalAmount = `Rs ${orderctx.totalAmount.toFixed(2)}`;
    orderMealDetails = (
      <div>
        {orderctx.cartItems.map((item) => (
          <OrderedMealItem
            key={item.mealId}
            name={item.mealName}
            quantity={item.quantity}
            price={item.amount}

          />
        ))}
      </div>
    );
  }




  // return () => clearInterval(interval);

  return (
    <Fragment>
      <NavbarComp
        link1="Home"
        link3="Events"
        link4="Login"
        statusButton={<Nav.Link className='bg-brown' as={Link} to="/orderdetails">
          <Notification />
        </Nav.Link>} />
      {orderctx ? (<div className={classes.orderdetailscontainer}>
        <div className={classes.modal}>

          {orderMealDetails}

          <div className={classes.detail}>
            <div className={classes.detailinner}>
              <span>Total Amount :</span>
              <span>{totalAmount}</span>
            </div>
            <div className={classes.detailinner}>
              <span>Order ID :</span>
              <span>{orderctx.order_id}</span>
            </div>
            <div className={classes.detailinner}>
              <span>Table No :</span>
              <span>{orderctx.tableNo}</span>
            </div>
            <div className={classes.detailinner}>
              <span>Invoice Number :</span>
              <span>{orderctx.invoiceNumber}</span>
            </div>
            <div className={classes.detailinner}>
              <span>Order Status :</span>
              <span className={classes.status}>{orderctx.status}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button type="submit" className={classes.button} >Send Bill</button>
            {/* {orderCancle && <button type="submit" className={classes.button} >Order Cancle</button>} */}
          </div>


        </div>
      </div>) : null}
    </Fragment>
  )
}

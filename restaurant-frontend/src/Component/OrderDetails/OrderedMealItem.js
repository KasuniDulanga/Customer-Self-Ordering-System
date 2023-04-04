import classes from './OrderedMealItem.module.css';

const CartItem = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;

  return (
    <li className={classes['OrderedMeal-item']}>
      <div>
        <h5>{props.name}</h5> 
      </div>
      <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.quantity}>x {props.quantity}</span>
        </div>
    </li>
  );
};

export default CartItem;

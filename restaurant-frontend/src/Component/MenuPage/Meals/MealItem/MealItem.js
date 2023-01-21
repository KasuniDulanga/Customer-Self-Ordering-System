import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';
import foodimage from '../../../Images/food.jpg';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `Rs ${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div className={classes.foodimg}>
      <img src={foodimage}  alt='food' />
      </div>
      
      <li className={classes.meal1}>
      <div className={classes.desc}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      </li>
      
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
      
    </li>
  );
};

export default MealItem;

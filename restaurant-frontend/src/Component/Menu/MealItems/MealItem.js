import { useContext } from 'react';

import MealItemForm from '../MealItems/MenuItemForm';
import "../MealItems/MealItem.css";
import CartContext from '../Cart/CartContext';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `Rs.${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
        <div className="Ingrediant">{props.ingredients}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

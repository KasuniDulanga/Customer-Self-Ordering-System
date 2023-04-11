import { useContext, useEffect, useState } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';
import MealIngredientService from '../../../Services/MealIngredientService';
import IngredientList from '../IngredientList';



const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const base64Image = `${props.image}`;
  const price = `Rs ${props.price.toFixed(2)}`;
  const [ingredient, setIngredient] = useState([]);

  const addToCartHandler = quantity => {
    cartCtx.addItem({
      mealId: props.id,
      mealName: props.name,
      quantity: quantity,
      amount: props.price
    });
  };
  useEffect(() => {

    if (props.id) {
      MealIngredientService.getAllIngredientByMealId(props.id).then((response) => {
        setIngredient(response.data)
        console.log(response.data)
      }).catch(error => {
        console.log(error);
      })

    }
  })

  const ingredientList = ingredient.map((ingredient) => (
    <IngredientList
      name={ingredient.ingredientName}
      value={ingredient.value}
    />
  ));
  return (
    <ul className={classes.meal}>
      <div className={classes.foodimg}>
        <img src={`data:image;base64,${base64Image}`} alt='food' />
      </div>

      <li className={classes.meal1}>
        <div className={classes.desc}>
          <h4>{props.name}</h4>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
          {ingredient.length ? (<section className={classes.ingredients}>
              <ul>{ingredientList}</ul>
            
          </section>) : null}
        </div>
      </li>

      <div className={classes.qntform}>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>

    </ul>
  );
};

export default MealItem;

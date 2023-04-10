import classes from '../Meals/MealItem/MealItem.module.css'
const IngredientList = props => {
    
  return (
    <ul >
    <li >
      <div className={classes.name}>{props.name} : {props.value}</div> 
    </li>
  </ul>
  );
};


export default IngredientList;
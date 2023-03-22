import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';
import MealService from '../../Services/MealService';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },

// ];

const AvailableMeals = () => {
  const [Meals, setMeals] = useState([])
  
  useEffect(() =>{
    const interval = setInterval(() => {
      MealService.getAllMeals().then((response) => {
        setMeals(response.data)
        // console.log(response.data)
      }).catch(error => {
        console.log(error);
      })
    }, 1000);

    return () => clearInterval(interval);
    
  },[])


  const mealsList = Meals.map((meal) => (
    <MealItem
      key={meal.meal_id}
      id={meal.meal_id}
      name={meal.mealName}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
    
  );
};

export default AvailableMeals;

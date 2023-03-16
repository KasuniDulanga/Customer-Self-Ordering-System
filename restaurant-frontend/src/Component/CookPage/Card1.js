import { Fragment, useEffect, useState } from "react";
import classes from "./Card1.module.css";

function Card(props) {
  const mealDetails = props.mealDetails;
  const buttonName = props.buttonName;
  const onClickFunction = props.onClickFunction;
  const [meals, setMeals] = useState([]);
  const[customer,setCustomer] =useState([]);


  useEffect(() => {
      setMeals(mealDetails.cartItems);
      setCustomer(mealDetails.customer);

  },[mealDetails.cartItems, mealDetails.customer] );
  return (
    <Fragment>

      <div className={classes.carddetails}>
        <h6>Meals&emsp; :&ensp;
          {meals.map(
              meal =>
              
                <ul key={meal.id} >
                  <li>{meal.mealName} : {meal.quantity}</li>
                </ul>)}  
        </h6>
        <h6>Extra Note&emsp; :&ensp;{mealDetails.orderDescription}</h6>
        <h6>Time&emsp;&emsp; :&ensp;{mealDetails.date}</h6>
        <h6>Order Id&ensp;&nbsp;:&ensp;{mealDetails.order_id}</h6>
        <h6>Table No&ensp;&nbsp;:&ensp;{mealDetails.tableNo}</h6>
        <h6>Customer Name&ensp;:&ensp;{customer.customerName}</h6>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <div className={classes.buttoncookcard} onClick={(e) => onClickFunction(e, mealDetails.order_id)}><p>{buttonName}</p></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;

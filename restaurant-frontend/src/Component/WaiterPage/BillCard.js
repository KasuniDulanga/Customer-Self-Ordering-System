import { Fragment} from "react";
import classes from "./BillCard.module.css";
import OrderedMealItem from "../OrderDetails/OrderedMealItem";

function BillCard(props) {
  const mealDetails = props.mealDetails;
  const buttonName = props.buttonName;

  const onClickFunction = props.onClickFunction;


  const orderMealDetails = (
    <div>
      {mealDetails.cartItems.map((item) => (
        <OrderedMealItem
          key={item.mealId}
          name={item.mealName}
          quantity={item.quantity}
          price={item.amount}

        />
      ))}
    </div>
  );


  return (
    <Fragment>

      <div className={classes.carddetails}>     
        {orderMealDetails}
        <h6>Time&emsp;&emsp; :&ensp;{mealDetails.date}</h6>
        <h6>Order Id&ensp;&nbsp;:&ensp;{mealDetails.order_id}</h6>
        <h6>Table No&ensp;&nbsp;:&ensp;{mealDetails.tableNo}</h6>
        <h6>Total &ensp;:&ensp;{`Rs ${mealDetails.totalAmount.toFixed(2)}`}</h6>
        <div style={{ display: "flex", justifyContent: "right",padding:"10px"}}>
        
          <div className={classes.buttoncookcard} onClick={(e) => onClickFunction(e, mealDetails.order_id)}><p>{buttonName}</p></div>
        </div>
        
     
      </div>
    </Fragment>
  );
}

export default BillCard;
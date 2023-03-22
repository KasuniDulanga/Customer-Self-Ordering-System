import React, { Fragment, useEffect, useState } from "react";
import OrderService from "../Services/OrderService";
import classes from "../CookPage/CookPage.module.css";
import Card1 from "../CookPage/Card1.js";


const WaiterPage = () => {
  
  const [readyMeals, setReadyMeals] = useState([]);
  const [waiterAcceptedMeals, setWaiterAcceptedMeals] = useState([]);
  const [servedMeals, setServedMeals] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      OrderService.getAllReadyOrders()
      .then((response) => {
        setReadyMeals(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

      OrderService.getAllWaiterAcceptedOrders()
      .then((response) => {
        setWaiterAcceptedMeals(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    }, 1000);

    return () => clearInterval(interval);
    

  }, []);

  const onWaiterAccepted = (e, orderId) => {
    e.preventDefault();

    // console.log(orderId);
    // /*This will be changed from the database access only for demo*/
    const waiterAcceptedMeal = readyMeals.filter((meal) => {
      return meal.order_id === orderId;
    }); // return a array of meals which have order id of orderId
    const newReadyMeals = readyMeals.filter((meal) => {
      return meal.order_id !== orderId;
    }); // return a array of meals which haven't order id of orderId

    // var content = new StringContent("accepted", Encoding.UTF8, "application/json");
    OrderService.changeOrderStatus(orderId, { status: "waiteraccepted" }).then((response) => {
      console.log(response.data)
    }).catch(error => {
      console.log(error.response.data)
    });
    const newWaiterAcceptedMeals = [...waiterAcceptedMeals, waiterAcceptedMeal[0]]; // add accepted meals to existing accepted meal list

    setReadyMeals(newReadyMeals);
    setWaiterAcceptedMeals(newWaiterAcceptedMeals);
  };

  const onServed = (e, orderId) => {
    e.preventDefault();

    const servedMeal = waiterAcceptedMeals.filter((meal) => {
      return meal.order_id === orderId;
    });
    /*This should be changed from the database access only for demo*/
    const newWaiterAcceptedMeals = waiterAcceptedMeals.filter((meal) => {
      return meal.orderId !== orderId;
    }); // return a array of meals which haven't order id of orderId

    OrderService.changeOrderStatus(orderId, { status: "served" }).then((response) => {
      console.log(response.data)
    }).catch(error => {
      console.log(error.response.data)
    });
    const newServedMeals = [...servedMeals, servedMeal[0]]; // add accepted meals to existing accepted meal list

    setWaiterAcceptedMeals(newWaiterAcceptedMeals);
    setServedMeals(newServedMeals);
  };

  return (
    <Fragment>
      
      <div className={classes.cardbody}>
        <div className={classes.cardinner}>
          <h2 style={{ paddingBottom: "5px" }}>Ready Orders</h2>
          <div className={classes.doubleinner}>
            {readyMeals.length === 0 ? (
              <div
                className="card-details"
                style={{ textAlign: "center", marginTop: "165px" }}
              >
                <h2
                  style={{
                    fontFamily: "'Kaushan Script', cursive",
                    color: "#8a2b06",
                  }}
                >
                  No Ready Orders
                </h2>
              </div>
            ) : (
              readyMeals.map((meal) => (
                <Card1
                  mealDetails={meal}
                  buttonName={"Accept"}
                  onClickFunction={onWaiterAccepted}
                  key={meal.order_id}
                />
              ))
            )}
          </div>
        </div>
        <div className={classes.cardinner}>
          <h2 style={{ paddingBottom: "5px" }}>Waiter Accpeted Orders</h2>
          <div className={classes.doubleinner}>
            {waiterAcceptedMeals.length === 0 ? (
              <div
                className="card-details"
                style={{ textAlign: "center", marginTop: "165px" }}
              >
                <h2
                  style={{
                    fontFamily: "'Kaushan Script', cursive",
                    color: "#8a2b06",
                  }}
                >
                  No Accpeted Orders
                </h2>
              </div>
            ) : (
              waiterAcceptedMeals.map((meal) => (
                <Card1
                  mealDetails={meal}
                  buttonName={"Served"}
                  onClickFunction={onServed}
                  key={meal.order_id}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WaiterPage;


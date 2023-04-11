import React, { Fragment, useEffect, useState } from "react";
import OrderService from "../Services/OrderService";
import classes from "../CookPage/CookPage.module.css";
import Card1 from "../CookPage/Card1.js";
import BillCard from "./BillCard";
import {useParams } from 'react-router-dom';
import EmployeeService from "../Services/EmplyeeService";
import UserCard from "../EmployeeLog/UserCard";

const WaiterPage = () => {
  const { id } = useParams();
  const [logEmployee, setLogEmployee] = useState('');
  const [readyMeals, setReadyMeals] = useState([]);
  const [waiterAcceptedMeals, setWaiterAcceptedMeals] = useState([]);
  const [servedMeals, setServedMeals] = useState([]);
  useEffect(() => {

    if (id) {
      EmployeeService.getEmployeeById(id).then((response) => {
        setLogEmployee(response.data)

        // console.log(response.data)
      }).catch(error => {
        console.log(error);
      })
    }

    const interval = setInterval(() => {
      OrderService.getAllReadyOrders()
      .then((response) => {
        setReadyMeals(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

      OrderService.getAllWaiterAcceptedOrders(id)
      .then((response) => {
        setWaiterAcceptedMeals(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    }, 1000);

    return () => clearInterval(interval);
    

  }, [id]);

  const onServed = (e, orderId) => {
    e.preventDefault();

  
    OrderService.changeOrderStatus(orderId, { status: "served" },id).then((response) => {
      console.log(response.data)
    }).catch(error => {
      console.log(error.response.data)
    });
  
  };

  const onBilled = (e, orderId) => {
    e.preventDefault();

    const servedMeal = waiterAcceptedMeals.filter((meal) => {
      return meal.order_id === orderId;
    });
    /*This should be changed from the database access only for demo*/
    const newWaiterAcceptedMeals = waiterAcceptedMeals.filter((meal) => {
      return meal.orderId !== orderId;
    }); // return a array of meals which haven't order id of orderId

    OrderService.changeOrderStatus(orderId, { status: "billed" },id).then((response) => {
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
      <div className={classes.cardbodycont}>
        <br></br>
        <UserCard
          Id={logEmployee.employee_id}
          fName={logEmployee.firstName}
          lName={logEmployee.lastName}
          Role={logEmployee.roleName}

        />
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
                  buttonName={"Served"}
                  onClickFunction={onServed}
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
                <BillCard
                  mealDetails={meal}
                  buttonName={"Payed"}
                  buttonName1={"Print"}
                  onClickFunction={onBilled}
                  key={meal.order_id}
                />
              ))
            )}
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default WaiterPage;


import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MealService from '../Services/MealService'
import editIcon from '../Images/editIcon.png'
import deleteIcon from '../Images/deleteicon.jpg'
import classes from "../AdminPage/Admin.module.css";

const ListMeals = () => {

    const [meals, setMeals] = useState([])
    useEffect(() => {
        MealService.getAllMeals().then((response) => {
            setMeals(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })

    }, [])

    const deleteMeal = (mealId) => {
        console.log(mealId)
    }

    return (
        <Fragment>
            
            <br></br>
                <div className={classes.cont}>
                
                    <h3 className="text-center">List Of Meals</h3>
                    <Link to="/add-meal" id={classes.addbtn} className="addbtn btn btn-primary mb-3">Add New Meal</Link>
                    <table id ={classes.table} className="table rounded shadow">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Meal Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                meals.map(
                                    meals =>
                                        <tr key={meals.meal_id}>
                                            <td data-label="ID">{meals.meal_id}</td>
                                            <td data-label="First Name">{meals.mealName}</td>
                                            <td data-label="Last Name">{meals.category}</td>
                                            <td data-label="Job Role">{meals.price}</td>
                                            <td data-label="Phone Number">{meals.description}</td>
                        
                                            <td data-label="Actions">
                                                <div>
                                                    <Link to={`/edit-meal/${meals.meal_id}`}><img src={editIcon} className={classes.editIcon} alt='edit' /></Link>
                                                    <Link onClick={() => deleteMeal(meals.meal_id)}><img src={deleteIcon} className={classes.editIcon}  alt='edit' /></Link>
                                                </div>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
                <br></br><br></br>
        </Fragment>
    )
}

export default ListMeals;
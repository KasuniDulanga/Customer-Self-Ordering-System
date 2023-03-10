import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MealService from '../Services/MealService';
import "./CookPage";


export const AddMeals = () => {

    const [mealName, setMealName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    // perform both save and update employee details
    const saveOrUpdateMeal = (e) => {
        e.preventDefault();
        const meal = { mealName,category,price,description }
    
        
        // if id contains value make update employee REST API
        if (id) {
            MealService.updateMeal(id, meal).then((response) => {
                navigate('/cook')
            }).catch(error => {
                console.log(error)
            })
        }

        else {
            
            MealService.createMeal(meal).then((response) => {
                console.log(response.data)
                navigate('/cook');

            }).catch(error => {
                console.log(error)
            })

        }

    }
    
    useEffect(() => {
        MealService.getMealById(id).then((response) => {
            setMealName(response.data.mealName);
            setCategory(response.data.category);
            setPrice(response.data.price);
            setDescription(response.data.description);
            
       
        }).catch(error => {
            console.log(error)
        })

    }, [id])

    const buttonSubmitOrUpdate = () => {
        if (id) {
            return <button className="btn btn-success" onClick={(e) => saveOrUpdateMeal(e)} >Update </button>
        }
        else {
            return <button className="btn btn-success" onClick={(e) => saveOrUpdateMeal(e)} >Submit </button>
        }
    }

    const title = () => {
        if (id) {
            return <h2 className='text-center'>Update Meal</h2>
        }
        else {
            return <h2 className='text-center'>Add New Meal</h2>
        }
    }
    return (
        <div className ="addcookbody">
            <br /><br /><br/>
            <div className="container addcook">
                <div className="row">
                    <div className="cardform col-md-6 offset-md-3 offset-md-2">
                        {
                            title()
                        }

                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Meal Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter meal name"
                                        name="mealName"
                                        className="form-control"
                                        value={mealName}
                                        onChange={(e) => setMealName(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Category :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter category"
                                        name="lastName"
                                        className="form-control"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Price :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter price"
                                        name="price"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Description :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter description"
                                        name="description"
                                        className="form-control"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div>
                                <br></br>
                               
                                {
                                    buttonSubmitOrUpdate()
                                }
                                <Link to="/cook" className="canclebtn btn btn-danger mx-3"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddMeals;
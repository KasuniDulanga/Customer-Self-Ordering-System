import React, { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MealService from '../Services/MealService';
import classes from "./Admin.module.css";
import MealIngredientService from '../Services/MealIngredientService';
import { ToastContainer, toast } from 'react-toastify';

export const AddMeals = () => {
    // const [value, setValue] = useState([])
    // const [MsgIsShown, setMsgIsShown] = useState(false);

    const [ingredientvalue1, setIngredientvalue1] = useState(0);
    const [ingredientvalue2, setIngredientvalue2] = useState(0);
    const [ingredientvalue3, setIngredientvalue3] = useState(0);

    const [mealName, setMealName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    // const decodeFileBase64 =(base64String)
    // const [availableingredient, setAvailableIngredients] = useState([])
    // const [mealIngredient,setMealIngredient] =useState([])
    const navigate = useNavigate();
    const { id } = useParams();

    // perform both save and update employee details
    const saveOrUpdateMeal = (e) => {
        e.preventDefault();
        // const meal = { mealName,category,price,description}
        if (mealName.trim() === '' || category.trim() === '' || price === '' ||image === null) {
            toast.error("meal name, category, price and image is required !!", {
              position: toast.POSITION.TOP_CENTER
            });
        }
        else{
        const listmealIngredient = [
            {
                "ingredient_id": 1,
                "ingredientName": "Calories",
                "value": ingredientvalue1
            },
            {
                "ingredient_id": 2,
                "ingredientName": "Fat",
                "value": ingredientvalue2
            },
            {
                "ingredient_id": 3,
                "ingredientName": "Protein",
                "value": ingredientvalue3
            }
        ]
        // if id contains value make update employee REST API
        if (id) {

          
            MealService.updateMealImage(id,image, mealName, category, price, description).then((response) => {
                console.log(response.data)
                if (response.data != null) {
                    MealIngredientService.updateMealIngredient(response.data.meal_id, listmealIngredient).then(() => {
                        navigate(-1)
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        }

        else {
            console.log(listmealIngredient);
            MealService.createMeal(image, mealName, category, price, description).then((response) => {
                // console.log(response.data);
                if (response.data != null) {
                    MealIngredientService.addMealIngredient(response.data.meal_id, listmealIngredient).then(() => {
                        navigate(-1)
                    }).catch(error => {
                        console.log(error)
                    })
                }


            }).catch(error => {
                console.log(error)
            })

        }
    }
    }

    useEffect(() => {

        if (id) {
            MealService.getMealById(id).then((response) => {
                setMealName(response.data.mealName);
                setCategory(response.data.category);
                setPrice(response.data.price);
                setDescription(response.data.description);
                // setImage(response.data.image);

            }).catch(error => {
                console.log(error)
            })

            MealIngredientService.getAllIngredientByMealId(id).then((response) => {
                // console.log(response.data[0].value)
                setIngredientvalue1(response.data[0].value);
                setIngredientvalue2(response.data[1].value);
                setIngredientvalue3(response.data[2].value);


            }).catch(error => {
                console.log(error)
            })

        }

        // IngredientService.availableIngredient().then((response) => {
        //     setAvailableIngredients(response.data);

        // }).catch(error => {
        //     console.log(error)
        // })


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
        <Fragment>
        <ToastContainer />
        <div className={classes.addemployeebody}>
            <div className={classes.addemployee}>
                <div className="row">
                    <div id={classes.cardform} className="col-md-6 offset-md-3 offset-md-2">
                        {
                            title()
                        }

                        <div className={classes.cardbody}>
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
                                
                                <div className="form-group mb-2">
                                    <label className="form-label"> Meal image :</label>
                                    <input
                                        type="file"
                                        placeholder="Upload meal image"
                                        name="image"
                                        className="form-control"
                                        // value={image}
                                        onChange={(e) => setImage(e.target.files[0])}

                                    >
                                    </input>
                                </div>


                                <div className="form-group mb-2">
                                    <label className="form-label">Calories</label>
                                    <input
                                        type="number"
                                        placeholder="Enter amount per one cup(179g)"
                                        name="value"
                                        className="form-control"
                                        value={ingredientvalue1}
                                        onChange={(e) => setIngredientvalue1(e.target.value)}

                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Fat</label>
                                    <input
                                        type="number"
                                        placeholder="Enter amount per one cup(179g)"
                                        name="value"
                                        className="form-control"
                                        value={ingredientvalue2}
                                        onChange={(e) => setIngredientvalue2(e.target.value)}

                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Protein</label>
                                    <input
                                        type="number"
                                        placeholder="Enter amount per one cup(179g)"
                                        name="value"
                                        className="form-control"
                                        value={ingredientvalue3}
                                        onChange={(e) => setIngredientvalue3(e.target.value)}

                                    >
                                    </input>
                                </div>


                                <br></br>

                                {
                                    buttonSubmitOrUpdate()
                                }
                                <Link to={-1} className="canclebtn btn btn-danger mx-3"> Cancel </Link>

                            </form>
                            <br></br>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </Fragment>
    )
}

export default AddMeals;
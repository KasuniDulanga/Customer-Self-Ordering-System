import axios from "axios";

const MEAL_BASE_REST_API_URL= 'http://localhost:8080/api/meal';

class MealService{
    getAllMeals(){
        return axios.get(MEAL_BASE_REST_API_URL)
    }
    createMeal(meal){
        return axios.post(MEAL_BASE_REST_API_URL,meal)
    }

    getMealById(meal_id){
        return axios.get(MEAL_BASE_REST_API_URL + '/' + meal_id);
    }

    updateMeal(meal_id,meal){
        return axios.put(MEAL_BASE_REST_API_URL + '/' + meal_id,meal);
    }

    deleteMeal(meal_id){
        return axios.delete(MEAL_BASE_REST_API_URL + '/' + meal_id);
    }
}
export default new MealService();
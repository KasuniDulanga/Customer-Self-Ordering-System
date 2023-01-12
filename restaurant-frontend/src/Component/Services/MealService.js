import axios from "axios";

const MEAL_BASE_REST_API_URL= 'http://localhost:8080/api/meal';

class MealService{
    getAllMeals(){
        return axios.get(MEAL_BASE_REST_API_URL)
    }
}
export default new MealService();
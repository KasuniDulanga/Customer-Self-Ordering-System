import axios from "axios";

const MEALINGREDIENT_BASE_REST_API_URL= 'http://localhost:8080/api/mealingredient';


class MealIngredientService{
    getAllIngredientByMealId(mealid){
        return axios.get(MEALINGREDIENT_BASE_REST_API_URL + '/' + mealid)
    }
    addMealIngredient(mealid,listmealIngredient){
        return axios.post(MEALINGREDIENT_BASE_REST_API_URL+ '/' + mealid ,listmealIngredient);
    
    }
    updateMealIngredient(mealid,listmealIngredient){
        return axios.put(MEALINGREDIENT_BASE_REST_API_URL+ '/' + mealid ,listmealIngredient);
    
    }




}

export default new MealIngredientService();
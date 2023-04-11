import axios from "axios";

const MEAL_BASE_REST_API_URL= 'http://localhost:8080/api/meal';

class MealService{
    getAllMeals(){
        return axios.get(MEAL_BASE_REST_API_URL)
    }
    createMeal(image,mealName,category,price,description){
        let formData =new FormData();
        formData.append("image",image);
        formData.append("mealName",mealName);
        formData.append("price",price);
        formData.append("category",category);
        formData.append("desc",description);
        return axios.post(MEAL_BASE_REST_API_URL ,formData);
    
    }

    getMealById(meal_id){
        return axios.get(MEAL_BASE_REST_API_URL + '/' + meal_id);
    }


    updateMealImage(meal_id,image,mealName,category,price,description){
        let formData =new FormData();
        formData.append("image",image);
        formData.append("mealName",mealName);
        formData.append("price",price);
        formData.append("category",category);
        formData.append("desc",description);
        console.log(image);
     
        return axios.put(MEAL_BASE_REST_API_URL + '/' + meal_id,formData);
    }

    deleteMeal(meal_id){
        return axios.delete(MEAL_BASE_REST_API_URL + '/' + meal_id);
    }
}
export default new MealService();
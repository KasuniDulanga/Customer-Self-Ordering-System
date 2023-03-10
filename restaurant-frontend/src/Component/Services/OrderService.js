import axios from "axios";

const MEAL_BASE_REST_API_URL= 'http://localhost:8080/api/cart/plceorder';

class OrderService{
    // getAllOrders(){
    //     return axios.get(MEAL_BASE_REST_API_URL)
    // }
    placeOrder(order){
        return axios.post(MEAL_BASE_REST_API_URL)
    }

    // getMealById(meal_id){
    //     return axios.get(MEAL_BASE_REST_API_URL + '/' + meal_id);
    // }

    // updateMeal(meal_id,meal){
    //     return axios.put(MEAL_BASE_REST_API_URL + '/' + meal_id,meal);
    // }

    // deleteMeal(meal_id){
    //     return axios.delete(MEAL_BASE_REST_API_URL + '/' + meal_id);
    // }
}
export default new OrderService();
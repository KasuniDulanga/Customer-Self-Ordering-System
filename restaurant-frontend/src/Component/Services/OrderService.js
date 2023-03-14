import axios from "axios";

const MEAL_BASE_REST_API_URL= 'http://localhost:8080/api/cart/placeOrder';
const ORDER_BASE_REST_API_URL= 'http://localhost:8080/api/order';

class OrderService{

    placeOrder(order){
        return axios.post(MEAL_BASE_REST_API_URL,order)
    }

    getAllPendingOrders(){
        return axios.get(ORDER_BASE_REST_API_URL + '/pendingOrders')
    }

    getAllAcceptedOrders(){
        return axios.get(ORDER_BASE_REST_API_URL + '/acceptedOrders')
    }

    changeOrderStatus(orderId,status){
        return axios.put(ORDER_BASE_REST_API_URL + '/' + orderId,status)
    }
    

    

    
}
export default new OrderService();
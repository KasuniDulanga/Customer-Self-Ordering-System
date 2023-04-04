import axios from "axios";

const MEAL_BASE_REST_API_URL= 'http://localhost:8080/api/cart/placeOrder';
const ORDER_BASE_REST_API_URL= 'http://localhost:8080/api/order';
const GETORDER_BASE_REST_API_URL= 'http://localhost:8080/api/cart/getorder';

class OrderService{

    placeOrder(order){
        return axios.post(MEAL_BASE_REST_API_URL,order)
    }
//getting order by id
    getOrderDetails(id){
        return axios.get(GETORDER_BASE_REST_API_URL + '/' + id)
    }
    getAllPendingOrders(){
        return axios.get(ORDER_BASE_REST_API_URL + '/pendingOrders')
    }

    getAllAcceptedOrders(id){
        return axios.get(ORDER_BASE_REST_API_URL + '/acceptedOrders/'+ id)
    }

    getAllReadyOrders(){
        return axios.get(ORDER_BASE_REST_API_URL + '/readyOrders')
    }

    getAllWaiterAcceptedOrders(id){
        return axios.get(ORDER_BASE_REST_API_URL + '/waiterAcceptedOrders/'+ id)
    }
    changeOrderStatus(orderId,status,emp_id){
        // let formData =new FormData();
        // formData.append("image",image);
        return axios.put(ORDER_BASE_REST_API_URL + '/' + orderId + '/' + emp_id,status)
    }
    

    

    
}
export default new OrderService();
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


    // createEmployee(employee){
    //     return axios.post(EMPLOYEE_BASE_REST_API_URL,employee)
    // }

    // getEmployeeById(employee_id){
    //     return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employee_id);
    // }

    // updateEmployee(employee_id,employee){
    //     return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + employee_id,employee);
    // }

    // deleteEmployee(employee_id){
    //     return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employee_id);
    // }

    // getRoleName(roleId){
    //     return axios.get(ROLE_BASE_REST_API_URL+ '/' + roleId)
    // }

}

export default new MealIngredientService();
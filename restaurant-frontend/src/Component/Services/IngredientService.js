import axios from "axios";

const INGREDIENT_BASE_REST_API_URL= 'http://localhost:8080/api/ingredient';


class IngredientService{
    availableIngredient(){
        return axios.get(INGREDIENT_BASE_REST_API_URL)
    }

  

}

export default new IngredientService();
import axios from "axios";

const LOGIN_BASE_REST_API_URL= 'http://localhost:8080/api/employeelogin';

class UserLoginService{

    login(loginDetails){
        return axios.post(LOGIN_BASE_REST_API_URL,loginDetails)
    }
   
}

export default new UserLoginService();
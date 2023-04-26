import axios from "axios";

const COMMENT_BASE_REST_API_URL= 'http://localhost:8080/api/comment';

class CommentService{

    getAllComments(){
        return axios.get(COMMENT_BASE_REST_API_URL);
    }
    createComment(comment){
        return axios.post(COMMENT_BASE_REST_API_URL,comment);
    }
   
}

export default new CommentService();
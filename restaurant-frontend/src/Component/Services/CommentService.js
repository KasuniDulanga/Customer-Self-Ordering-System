import axios from "axios";

const COMMENT_BASE_REST_API_URL= 'http://localhost:8080/api/comment';

class CommentService{

    createComment(comment){
        return axios.post(COMMENT_BASE_REST_API_URL,comment);
    }
   
}

export default new CommentService();
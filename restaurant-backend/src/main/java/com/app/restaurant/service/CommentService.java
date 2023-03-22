package com.app.restaurant.service;

import com.app.restaurant.model.Comments;
import com.app.restaurant.repository.CommentRepository;
import org.hibernate.mapping.Column;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    private CommentRepository commentRepo;

    public Comments createComment(String comment){
        Comments newComment = new Comments();
        newComment.setComment(comment);
        commentRepo.save(newComment);

        return newComment;
    }

    public List<Comments> getAllComments(){
        return commentRepo.findAll();
    }
}

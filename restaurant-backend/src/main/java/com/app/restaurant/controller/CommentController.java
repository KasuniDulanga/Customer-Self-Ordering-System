package com.app.restaurant.controller;

import com.app.restaurant.model.Comments;
import com.app.restaurant.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping
    public List<Comments> getAllComments(){
        return commentService.getAllComments();
    }
    @PostMapping
    public Comments createComment(@RequestBody String comment){
        return commentService.createComment(comment);
    }




}

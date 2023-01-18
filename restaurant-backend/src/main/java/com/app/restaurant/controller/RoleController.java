package com.app.restaurant.controller;

import com.app.restaurant.model.Meal;
import com.app.restaurant.model.Role;
import com.app.restaurant.repository.MealRepository;
import com.app.restaurant.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/role")
public class RoleController {
    @Autowired
    RoleRepository roleRepo;

    @GetMapping
    public List<Role> getAllRoles(){
        return roleRepo.findAll();
    }

}

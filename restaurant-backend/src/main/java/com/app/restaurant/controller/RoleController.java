package com.app.restaurant.controller;

import com.app.restaurant.model.Role;
import com.app.restaurant.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/role")
public class RoleController {

    @Autowired
    public RoleService roleService;

    @GetMapping
    public List<Role> getAllRoles(){
        return roleService.getAllRoles();
    }
    @GetMapping("{id}")
    public String getRoleName(@PathVariable int id){
        return roleService.getRoleName(id);
    }


}

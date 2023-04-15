package com.app.restaurant.service;

import com.app.restaurant.exception.ResourceNotFoundException;
import com.app.restaurant.model.Role;
import com.app.restaurant.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepo;

    public int getRoleID(String name){
        Role role = roleRepo.findByRoleName(name);
        return role.getRole_id();
    }

    public String getRoleName(int id){
        Role role = roleRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));
        return role.getRoleName();
    }
    public List<Role> getAllRoles(){
        return roleRepo.findAll();
    }
}

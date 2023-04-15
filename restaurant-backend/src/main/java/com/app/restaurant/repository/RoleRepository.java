package com.app.restaurant.repository;

import com.app.restaurant.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    public Role findByRoleName(String roleName) ;
}

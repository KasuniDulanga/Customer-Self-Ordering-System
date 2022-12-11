package com.app.restaurant.repository;

import com.app.restaurant.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Employee, Long> {
    Employee findByEmailAndPassword(String email,String password);
}

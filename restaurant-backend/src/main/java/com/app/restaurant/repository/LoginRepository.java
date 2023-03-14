package com.app.restaurant.repository;

import com.app.restaurant.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Employee, Integer> {
    //findby can return multiple results while findOneBy will return a single results or null
    Employee findOneByEmailIgnoreCaseAndPassword(String email,String password);
}

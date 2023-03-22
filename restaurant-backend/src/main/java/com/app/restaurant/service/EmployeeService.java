package com.app.restaurant.service;

import com.app.restaurant.exception.ResourceNotFoundException;
import com.app.restaurant.model.Employee;
import com.app.restaurant.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepo;

    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();
    }

    public Employee createEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public Employee getEmployeeById(int id){
        Employee employee =employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));
        return employee;
    }

    public Employee updateEmployee(int id,Employee employeeDetails){
        Employee updateEmployee =employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));

        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setPassword(employeeDetails.getPassword());
        updateEmployee.setRoleId(employeeDetails.getRoleId());
        updateEmployee.setEmail(employeeDetails.getEmail());
        updateEmployee.setAddress(employeeDetails.getAddress());
        updateEmployee.setPhone_no(employeeDetails.getPhone_no());

        employeeRepo.save(updateEmployee);
        return updateEmployee;
    }

    public Map<String,Boolean> deleteEmployee(int id){
        Employee employee =employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));

        employeeRepo.delete(employee);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return response;
    }
}

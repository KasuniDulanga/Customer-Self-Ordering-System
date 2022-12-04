package com.app.restaurant.controller;

import com.app.restaurant.exception.ResourceNotFoundException;
import com.app.restaurant.model.Employee;
import com.app.restaurant.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepo;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();
    }

    //build create employee REST API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepo.save(employee);
    }

    //build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
        Employee employee =employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));

        return ResponseEntity.ok(employee);
    }

    //build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails){
        Employee updateEmployee =employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));

        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setPassword(employeeDetails.getPassword());
        updateEmployee.setJob_role(employeeDetails.getJob_role());
        updateEmployee.setEmail(employeeDetails.getEmail());
        updateEmployee.setAddress(employeeDetails.getAddress());
        updateEmployee.setPhone_no(employeeDetails.getPhone_no());

        employeeRepo.save(updateEmployee);
        return ResponseEntity.ok(updateEmployee);

    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
        Employee employee =employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));

        employeeRepo.delete(employee);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

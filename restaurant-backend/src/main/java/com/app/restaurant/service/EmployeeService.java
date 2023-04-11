package com.app.restaurant.service;

import com.app.restaurant.dto.EmployeeDTO;
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

    @Autowired
    private RoleService roleService;

    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();
    }

    public Employee createEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public EmployeeDTO getEmployeeById(int id){
        Employee emp =employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));
        EmployeeDTO empDTO =new EmployeeDTO();
        empDTO.setEmployee_id(emp.getEmployee_id());
        empDTO.setFirstName(emp.getFirstName());
        empDTO.setLastName(emp.getLastName());
        empDTO.setEmail(emp.getEmail());
        empDTO.setPhone_no(emp.getPhone_no());
        empDTO.setAddress(emp.getAddress());
        empDTO.setRoleName(roleService.getRoleName((int) emp.getRoleId()));

        return empDTO;
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
        System.out.println("service claas");
        employeeRepo.delete(employee);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return response;
    }
}

package com.app.restaurant.service;

import com.app.restaurant.dto.EmployeeDTO;
import com.app.restaurant.exception.ResourceNotFoundException;
import com.app.restaurant.model.Employee;
import com.app.restaurant.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


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

    public Employee createEmployee(EmployeeDTO employeedto){
        Employee newEmployee = new Employee();
        newEmployee.setFirstName(employeedto.getFirstName());
        newEmployee.setLastName(employeedto.getLastName());
        newEmployee.setEmail(employeedto.getEmail());
        newEmployee.setPassword(employeedto.getPassword());
        newEmployee.setPhone_no(employeedto.getPhone_no());
        newEmployee.setAddress(employeedto.getAddress());
        newEmployee.setRoleId(roleService.getRoleID(employeedto.getRoleName()));

        return employeeRepo.save(newEmployee);
    }

    public EmployeeDTO getEmployeeById(int id){
        Employee emp =employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));
        EmployeeDTO empDTO =new EmployeeDTO();
        empDTO.setEmployee_id(emp.getEmployee_id());
        empDTO.setFirstName(emp.getFirstName());
        empDTO.setLastName(emp.getLastName());
        empDTO.setEmail(emp.getEmail());
        empDTO.setPassword(emp.getPassword());
        empDTO.setPhone_no(emp.getPhone_no());
        empDTO.setAddress(emp.getAddress());
        empDTO.setRoleName(roleService.getRoleName((int) emp.getRoleId()));


        return empDTO;
    }

    public Employee updateEmployee(int id,EmployeeDTO employeeDetails){
        Employee updateEmployee =employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));

        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setPassword(employeeDetails.getPassword());
        updateEmployee.setRoleId(roleService.getRoleID(employeeDetails.getRoleName()));
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

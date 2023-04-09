package com.app.restaurant.controller;

import com.app.restaurant.dto.EmployeeDTO;
import com.app.restaurant.model.Employee;
import com.app.restaurant.service.EmployeeService;
import com.app.restaurant.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private RoleService roleService;

    @GetMapping
    public List<EmployeeDTO> getAllEmployees(){
        List<Employee> employee =employeeService.getAllEmployees();
        List<EmployeeDTO> employeeDTO = new ArrayList<>() ;

        for (Employee emp : employee){
            EmployeeDTO empDTO =new EmployeeDTO();
            empDTO.setEmployee_id(emp.getEmployee_id());
            empDTO.setFirstName(emp.getFirstName());
            empDTO.setLastName(emp.getLastName());
            empDTO.setEmail(emp.getEmail());
            empDTO.setPhone_no(emp.getPhone_no());
            empDTO.setAddress(emp.getAddress());
            empDTO.setRoleName(roleService.getRoleName((int) emp.getRoleId()));
            employeeDTO.add(empDTO);

        }


        return employeeDTO;
    }

    //build create employee REST API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    //build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id){

        return ResponseEntity.ok(employeeService.getEmployeeById(id));
    }

    //build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id,@RequestBody Employee employeeDetails){
        return ResponseEntity.ok(employeeService.updateEmployee(id,employeeDetails));

    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable int id){
        System.out.println(id);
        return ResponseEntity.ok(employeeService.deleteEmployee(id));
    }

}

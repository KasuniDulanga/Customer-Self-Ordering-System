package com.app.restaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

@Setter
@Getter
public class EmployeeDTO {
    private int employee_id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone_no;
    private String address;
    private String roleName;
}

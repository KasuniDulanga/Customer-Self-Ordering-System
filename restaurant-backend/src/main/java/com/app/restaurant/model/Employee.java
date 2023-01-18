package com.app.restaurant.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long employee_id;

    @Column(name="first_name" , nullable = false)
    private String firstName;

    @Column(name="last_name",nullable = false)
    private String lastName;

    @Column(name="password",nullable = false)
    private String password;

    @Column(name="gmail",nullable = false)
    private String email;

    @Column(name ="phone_no")
    private String phone_no;

    @Column(name="address")
    private String address;

    @Column(name="role_id",nullable = false)
    private long roleId;


}

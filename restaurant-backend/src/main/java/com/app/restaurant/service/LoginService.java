package com.app.restaurant.service;


import com.app.restaurant.dto.LoginRequestDTO;
import com.app.restaurant.dto.ResponseLoginDTO;
import com.app.restaurant.model.Employee;
import com.app.restaurant.repository.LoginRepository;
import com.app.restaurant.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class LoginService {

    @Autowired
    LoginRepository loginRepo;

    public Integer login(LoginRequestDTO loginRequestDTO){
        ResponseLoginDTO newLoginResponse = new ResponseLoginDTO();

        // verify user exist with given email and password
        Employee user = loginRepo.findOneByEmailIgnoreCaseAndPassword(loginRequestDTO.getEmail(), loginRequestDTO.getPassword());
        int roleId = 0;

        if (user == null){
            newLoginResponse.setMessage("User login failed");
            newLoginResponse.setDate(DateUtil.getCurrentDateTime());
            roleId = 0;


        }else{
            newLoginResponse.setMessage("User logged in");
            newLoginResponse.setDate(DateUtil.getCurrentDateTime());
            roleId =Math.toIntExact(user.getRoleId());

        }

        return roleId ;


    }
}

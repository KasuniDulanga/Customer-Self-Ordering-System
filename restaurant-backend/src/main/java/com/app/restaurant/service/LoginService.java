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

    public ResponseLoginDTO login(LoginRequestDTO loginRequestDTO){
        ResponseLoginDTO newLoginResponse = new ResponseLoginDTO();

        // verify user exist with given email and password
        Employee user = loginRepo.findOneByEmailIgnoreCaseAndPassword(loginRequestDTO.getEmail(), loginRequestDTO.getPassword());

        if (user == null){
            newLoginResponse.setMessage("User login failed");
            newLoginResponse.setDate(DateUtil.getCurrentDateTime());
            newLoginResponse.setRoleId(0);
            newLoginResponse.setEmployeeId(0);



        }else{
            newLoginResponse.setMessage("User logged in");
            newLoginResponse.setDate(DateUtil.getCurrentDateTime());
            newLoginResponse.setRoleId((int) user.getRoleId());
            newLoginResponse.setEmployeeId(user.getEmployee_id());



        }

        return newLoginResponse ;


    }
}

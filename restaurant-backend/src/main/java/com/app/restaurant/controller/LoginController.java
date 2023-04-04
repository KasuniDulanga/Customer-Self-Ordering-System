package com.app.restaurant.controller;

import com.app.restaurant.dto.ResponseLoginDTO;
import com.app.restaurant.model.Employee;
import com.app.restaurant.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.app.restaurant.dto.LoginRequestDTO;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employeelogin")
public class LoginController {

    @Autowired
    LoginService loginService;

    @PostMapping //sending data from frontend to backend
    public ResponseEntity<ResponseLoginDTO> login(@RequestBody LoginRequestDTO loginRequestDTO ){

        return ResponseEntity.ok(loginService.login(loginRequestDTO));

    }
//    @GetMapping("/privateApi")
//    public ResponseEntity<ResponseLoginDTO> privateApi(@RequestHeader(value = "authorization", defaultValue = "") String auth) throws Exception {
//        ResponseLoginDTO apiResponse =new ResponseLoginDTO();
//
////        jwtUtils.verify(auth);
//
//        apiResponse.setMessage("this is private api");
//        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
//    }
}



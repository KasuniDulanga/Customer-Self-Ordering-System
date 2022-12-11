package com.app.restaurant.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
public class LoginController {
    @GetMapping({"forAdmin"})
    public String forAdmin(){
        return "Admin can access";
    }
    @GetMapping({"forCook"})
    public String forCook(){
        return "Cook can access";
    }

    @GetMapping({"forWaiter"})
    public String forWaiter(){
        return "Waiter can access";
    }

}

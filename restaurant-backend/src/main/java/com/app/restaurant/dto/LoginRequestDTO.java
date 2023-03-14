package com.app.restaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class LoginRequestDTO {

    private String email;
    private String password;
}

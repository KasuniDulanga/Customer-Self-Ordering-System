package com.app.restaurant.dto;


import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Setter
@Getter
public class ResponseLoginDTO {


    private String date;
    private String message;
    private Integer status;

    public ResponseLoginDTO() {
        this.status = HttpStatus.OK.value();
        this.date=date;
        this.message =message;

    }
}

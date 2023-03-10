package com.app.restaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class ResponseOrderDTO {
    private double amount;
    private int invoiceNumber;
    private String date;
    private String OrderDescription;
    private int orderId;
}

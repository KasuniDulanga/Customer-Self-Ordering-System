package com.app.restaurant.dto;

import com.app.restaurant.model.ShoppingCart;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResponseOrderDTO {
    private int orderId;
    private List<ShoppingCart> cartItems;
    private String customerName;
    private int tableNo;
    private double amount;
    private int invoiceNumber;
    private String date;
    private String OrderDescription;


}

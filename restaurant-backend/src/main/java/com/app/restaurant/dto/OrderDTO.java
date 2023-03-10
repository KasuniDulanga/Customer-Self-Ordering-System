package com.app.restaurant.dto;

import com.app.restaurant.model.ShoppingCart;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
public class OrderDTO {


    private List<ShoppingCart> cartItems;
    private String customerPhone;
    private String customerName;
    private int tableNo;
    private String orderDescription;

}


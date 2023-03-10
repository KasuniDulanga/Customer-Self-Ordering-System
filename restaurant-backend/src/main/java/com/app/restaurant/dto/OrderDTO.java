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

    @Override
    public String toString() {
        return "OrderDTO{" +
                "cartItems=" + cartItems +
                ", customerPhone='" + customerPhone + '\'' +
                ", customerName='" + customerName + '\'' +
                ", tableNo=" + tableNo +
                ", orderDescription='" + orderDescription + '\'' +
                '}';
    }

    private String customerName;
    private int tableNo;
    private String orderDescription;

}


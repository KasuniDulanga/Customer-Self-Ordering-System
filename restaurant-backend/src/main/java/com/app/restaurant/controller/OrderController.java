package com.app.restaurant.controller;

import com.app.restaurant.model.Order;
import com.app.restaurant.model.OrderStatus;
import com.app.restaurant.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/pendingOrders")
    public List<Order> getAllPendingOrders(){
        return orderService.getAllPendingOrders();
    }

    @GetMapping("/acceptedOrders")
    public List<Order> getAllAcceptedOrders(){
        return orderService.getAllAcceptedOrders();
    }

    @PutMapping("{id}")
    public ResponseEntity<Order> changeOrderStatus(@PathVariable int id,@RequestBody OrderStatus status){
        System.out.println(status.getStatus());
        return ResponseEntity.ok(orderService.changeOrderStatus(id,status.getStatus()));


    }

}

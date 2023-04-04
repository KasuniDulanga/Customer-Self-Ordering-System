package com.app.restaurant.controller;

import com.app.restaurant.dto.OrderStatusDTO;
import com.app.restaurant.model.Order;
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

    @GetMapping("/acceptedOrders/{id}")
    public List<Order> getAllAcceptedOrders(@PathVariable int id){
        return orderService.getAllAcceptedOrders(id);
    }

    @GetMapping("/readyOrders")
    public List<Order> getAllReadyOrders(){
        return orderService.getAllReadyOrders();
    }

    @GetMapping("/waiterAcceptedOrders/{id}")
    public List<Order> getAllWaiterAcceptedOrders(@PathVariable int id){
        return orderService.getAllWaiterAcceptedOrders(id);
    }
    @GetMapping("/servedOrders")
    public List<Order> getAllServedOrders(@RequestBody int id){
        return orderService.getAllServedOrders(id);
    }

    @PutMapping("{id}/{emp_id}")
    public ResponseEntity<Order> changeOrderStatus(@PathVariable int id,@PathVariable int emp_id,@RequestBody OrderStatusDTO status){
        System.out.print(emp_id);
        return ResponseEntity.ok(orderService.changeOrderStatus(id,status.getStatus(),emp_id));


    }

}

package com.app.restaurant.controller;

import com.app.restaurant.dto.OrderDTO;
import com.app.restaurant.dto.ResponseOrderDTO;
import com.app.restaurant.model.Customer;
import com.app.restaurant.model.Order;
import com.app.restaurant.service.CustomerService;
import com.app.restaurant.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private OrderService orderService;
    private CustomerService customerService;

    public ResponseEntity<Order> getOrderDetails(@PathVariable int orderId) {

        Order order = orderService.getOrderDetail(orderId);
        return ResponseEntity.ok(order);
    }
    @PostMapping("/placeOrder")
    public ResponseEntity<ResponseOrderDTO> placeOrder(@RequestBody OrderDTO orderDTO){
        ResponseOrderDTO responseOrderDTO = new ResponseOrderDTO();
        double amount = orderService.getCartAmount(orderDTO.getCartItems());

        Customer customer = new Customer(orderDTO.getCustomerName(), orderDTO.getCustomerPhone());
        Integer customerIdFromdb = customerService.isCustomerPresent(customer);
        if(customerIdFromdb != null){
            customer.setCustomer_id(customerIdFromdb);
        }
        else {
            customer = customerService.saveCustomer(customer);
        }

        Order order = new Order(orderDTO.getTableNo(),orderDTO.getOrderDescription(),"pending", customer, orderDTO.getCartItems());
        order = orderService.saveOrder(order);


        return ResponseEntity.ok(responseOrderDTO);
    }
}

package com.app.restaurant.controller;

import com.app.restaurant.dto.OrderDTO;
import com.app.restaurant.dto.ResponseOrderDTO;
import com.app.restaurant.model.Customer;
import com.app.restaurant.model.Order;
import com.app.restaurant.service.CustomerService;
import com.app.restaurant.service.OrderService;
import com.app.restaurant.util.DateUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private CustomerService customerService;



    @GetMapping("/getorder/{order_id}")
    public ResponseEntity<Order> getOrderDetails(@PathVariable int order_id) {

        Order order = orderService.getOrderDetail(order_id);
        return ResponseEntity.ok(order);
    }
    @PostMapping("/placeOrder")
    public ResponseEntity<ResponseOrderDTO> placeOrder(@RequestBody OrderDTO orderDTO){
        ResponseOrderDTO responseOrderDTO = new ResponseOrderDTO();

        System.out.println(orderDTO.toString());

        Customer customer = new Customer();
        customer.setCustomerName(orderDTO.getCustomerName());
        customer.setCustomerPhone(orderDTO.getCustomerPhone());

        Integer customerIdFromdb = customerService.isCustomerPresent(customer);
        if(customerIdFromdb != null){
            customer.setCustomer_id(customerIdFromdb);
        }
        else {
            customer = customerService.saveCustomer(customer);
        }

        Order order = new Order();
        order.setTableNo(orderDTO.getTableNo());
        order.setOrderDescription(orderDTO.getOrderDescription());
        order.setStatus("Pending");
        order.setCustomer(customer);
        order.setCartItems(orderDTO.getCartItems());
        order.setCartItems(orderDTO.getCartItems());
        order.setDate(DateUtil.getCurrentDateTime());
        order.setInvoiceNumber(new Random().nextInt(1000));
        order = orderService.saveOrder(order);

        double totCartAmount = orderService.getCartAmount(orderDTO.getCartItems());
        responseOrderDTO.setCartItems(orderDTO.getCartItems());
        responseOrderDTO.setCustomerName(orderDTO.getCustomerName());
        responseOrderDTO.setTableNo(orderDTO.getTableNo());
        responseOrderDTO.setOrderId(order.getOrder_id());
        responseOrderDTO.setAmount(totCartAmount);
        responseOrderDTO.setDate(DateUtil.getCurrentDateTime());
        responseOrderDTO.setInvoiceNumber(new Random().nextInt(1000));

        responseOrderDTO.setOrderDescription(orderDTO.getOrderDescription());


        return ResponseEntity.ok(responseOrderDTO);
    }
}

package com.app.restaurant.repository;

import com.app.restaurant.model.Employee;
import com.app.restaurant.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository  extends JpaRepository<Order, Integer> {

    List<Order> findAllByStatusIgnoreCase(String status);

}

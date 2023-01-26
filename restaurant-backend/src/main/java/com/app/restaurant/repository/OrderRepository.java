package com.app.restaurant.repository;

import com.app.restaurant.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository  extends JpaRepository<Order, Integer> {
}

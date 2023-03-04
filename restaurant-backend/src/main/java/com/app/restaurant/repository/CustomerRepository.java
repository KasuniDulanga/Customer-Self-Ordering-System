package com.app.restaurant.repository;

import com.app.restaurant.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    public Customer getCustomerByCustomerPhoneAndCustomerName(String customerPhone,String customerName);
}

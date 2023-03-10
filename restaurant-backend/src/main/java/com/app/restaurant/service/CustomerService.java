package com.app.restaurant.service;

import com.app.restaurant.model.Customer;
import com.app.restaurant.repository.CustomerRepository;
import org.springframework.stereotype.Service;

@Service
public class CustomerService{
    private CustomerRepository customerRepo;

    public CustomerService(CustomerRepository customerRepo) {
        this.customerRepo = customerRepo;
    }

    public Customer saveCustomer(Customer customer){
        return customerRepo.save(customer);
    }
    //check whether a customer is a old customer or a new customer
    public Integer isCustomerPresent(Customer customer) {
        Customer customer1 = customerRepo.getCustomerByCustomerPhoneAndCustomerName(customer.getCustomerPhone(),customer.getCustomerName());
        return customer1!=null ? customer1.getCustomer_id(): null ;
    }
}

package com.app.restaurant.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long order_id;

    @Column(name="table_no" , nullable = false)
    private int tableNo;

    @Column(name="net_amount",nullable = false)
    private double totalAmount;

    @Column(name="status")
    private String status;

    @Column(name="customer_id",nullable = false)
    private long customerId;
    
}

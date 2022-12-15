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
@Table(name="meal")
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long meal_id;

    @Column(name="meal_name" , nullable = false)
    private String mealName;

    @Column(name="category",nullable = false)
    private String category;

    @Column(name="price",nullable = false)
    private Double price;

    @Column(name="description")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name="serving_size",nullable = false)
    private Size servingSize;

}

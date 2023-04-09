package com.app.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="meal")
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int meal_id;

    @Column(name="meal_name" , nullable = false)
    private String mealName;

    @Column(name="category",nullable = false)
    private String category;

    @Column(name="price",nullable = false)
    private double price;

    @Column(name="description")
    private String description;

    @Lob
    @Column(name ="image" ,columnDefinition = "MEDIUMBLOB")
    private String image;

    @OneToMany(mappedBy = "meal", cascade = CascadeType.ALL)
    private List<MealIngredient> mealIngredients = new ArrayList<>();




}

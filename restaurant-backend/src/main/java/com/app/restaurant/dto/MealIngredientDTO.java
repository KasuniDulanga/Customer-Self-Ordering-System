package com.app.restaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MealIngredientDTO {
    private int ingredient_id;
    private String ingredientName;
    private double value;
}

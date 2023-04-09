package com.app.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="mealingredient")
public class MealIngredient {
    @EmbeddedId
    private MealIngredientKey mealIngredientKey = new MealIngredientKey();

    @ManyToOne
    @MapsId("ingredient_id")
    @JoinColumn(name="ingredient_id")
    private Ingredient ingredient;

    @ManyToOne
    @MapsId("meal_id")
    @JoinColumn(name="meal_id")
    @JsonIgnore
    private Meal meal;

    private double value;
}

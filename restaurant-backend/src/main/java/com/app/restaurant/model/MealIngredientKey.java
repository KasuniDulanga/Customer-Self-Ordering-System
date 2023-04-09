package com.app.restaurant.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Setter
@Getter
@Embeddable
public class MealIngredientKey implements Serializable {

    private int ingredient_id;
    private int meal_id;
}

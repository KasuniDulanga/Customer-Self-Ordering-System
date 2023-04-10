package com.app.restaurant.repository;

import com.app.restaurant.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MealIngredientrepository extends JpaRepository<MealIngredient,MealIngredientKey> {
    List<MealIngredient> findAllByMeal(Meal meal);
}

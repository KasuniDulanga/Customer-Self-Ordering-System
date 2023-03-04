package com.app.restaurant.service;

import com.app.restaurant.model.Meal;
import com.app.restaurant.repository.MealRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealService {
    private MealRepository mealRepo;

    public MealService(MealRepository mealRepo) {
        this.mealRepo  = mealRepo;
    }
    public List<Meal> getAllProducts() {
        return this.mealRepo.findAll();
    }
}

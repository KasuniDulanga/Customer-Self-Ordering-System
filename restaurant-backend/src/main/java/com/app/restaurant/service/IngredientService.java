package com.app.restaurant.service;

import com.app.restaurant.exception.ResourceNotFoundException;
import com.app.restaurant.model.Ingredient;
import com.app.restaurant.model.Meal;
import com.app.restaurant.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {
    @Autowired
    IngredientRepository ingredientrepo;



    public List<Ingredient> availableIngredient(){

        return ingredientrepo.findAll();

    }
}

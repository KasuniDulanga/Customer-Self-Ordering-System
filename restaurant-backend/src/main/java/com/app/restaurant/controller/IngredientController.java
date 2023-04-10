package com.app.restaurant.controller;

import com.app.restaurant.model.Ingredient;
import com.app.restaurant.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/ingredient")
public class IngredientController {

    @Autowired
    IngredientService ingredientService;

    @GetMapping
    public ResponseEntity<List<Ingredient>> availableIngredient(){

        return ResponseEntity.ok(ingredientService.availableIngredient());

    }
}

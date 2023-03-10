package com.app.restaurant.controller;


import com.app.restaurant.exception.ResourceNotFoundException;
import com.app.restaurant.model.Meal;
import com.app.restaurant.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/meal")
public class MealController {

    @Autowired
    MealRepository mealRepo;

    @GetMapping
    public List<Meal> getAllMeals(){
        return mealRepo.findAll();
    }

    //build create meal REST API
    @PostMapping
    public Meal createMeal(@RequestBody Meal meal) {
        return mealRepo.save(meal);
    }

    //build get meal by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Meal> getMealById(@PathVariable int id){
        Meal meal =mealRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id " +id));

        return ResponseEntity.ok(meal);
    }

    //build update meal REST API
    @PutMapping("{id}")
    public ResponseEntity<Meal> updateMeal(@PathVariable int id,@RequestBody Meal mealDetails){
        Meal updateMeal =mealRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id " +id));

        updateMeal.setMealName(mealDetails.getMealName());
        updateMeal.setCategory(mealDetails.getCategory());
        updateMeal.setPrice(mealDetails.getPrice());
        updateMeal.setDescription(mealDetails.getDescription());

        mealRepo.save(updateMeal);
        return ResponseEntity.ok(updateMeal);

    }

    // build delete meal REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteMeal(@PathVariable int id){
        Meal meal =mealRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id " +id));

        mealRepo.delete(meal);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

package com.app.restaurant.controller;


import com.app.restaurant.dto.MealIngredientDTO;
import com.app.restaurant.model.MealIngredient;
import com.app.restaurant.service.MealIngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/mealingredient")
public class MealIngredientController {

    @Autowired
    MealIngredientService mealingredientService;

    @GetMapping("{id}")
    public ResponseEntity<List<MealIngredientDTO>> getAllIngredientByMealId(@PathVariable int id){
        List<MealIngredientDTO> list = new ArrayList<>();
        List<MealIngredient> list1 = mealingredientService.getAllIngredientByMealId(id);
        for(MealIngredient l : list1 ){
            MealIngredientDTO dto = new MealIngredientDTO();
            dto.setIngredient_id(l.getIngredient().getIngredient_id());
            dto.setIngredientName(l.getIngredient().getIngredientName());
            dto.setValue( l.getValue());
            list.add(dto);
        }


        return ResponseEntity.ok(list);
    }

    @PostMapping("{id}")
    public void addMealIngredient(@PathVariable int id,@RequestBody List<MealIngredientDTO> listIngredient){
        mealingredientService.addMealIngredient(id,listIngredient);
    }
}

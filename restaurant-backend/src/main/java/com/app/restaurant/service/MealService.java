package com.app.restaurant.service;

import com.app.restaurant.exception.ResourceNotFoundException;
import com.app.restaurant.model.Meal;
import com.app.restaurant.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MealService {

    @Autowired
    private MealRepository mealRepo;


    public List<Meal> getAllMeals(){

        return mealRepo.findAll();
    }

    //build create meal REST API

    public Meal createMeal(MultipartFile image,String mealName,double price,String category,String description) throws IOException {
        Meal newMeal = new Meal();
        newMeal.setImage(Base64.getEncoder().encodeToString((image.getBytes())));
        newMeal.setMealName(mealName);
        newMeal.setCategory(category);
        newMeal.setPrice(price);
        newMeal.setDescription(description);


        mealRepo.save(newMeal);
        return newMeal;
    }

    //build get meal by id REST API

    public Meal getMealById(int id){
        Meal meal =mealRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id " +id));

        return meal;
    }
    public Meal updateMeal(int id,MultipartFile image,String mealName,double price,String category,String description) throws IOException {
        Meal updateMeal =mealRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id " +id));
//        String imageFileName = StringUtils.cleanPath(image.getOriginalFilename());
//        System.out.println("imagepath"+imageFileName);
        updateMeal.setImage(Base64.getEncoder().encodeToString((image.getBytes())));
        updateMeal.setMealName(mealName);
        updateMeal.setCategory(category);
        updateMeal.setPrice(price);
        updateMeal.setDescription(description);


        mealRepo.save(updateMeal);
        return updateMeal;

    }

    // build delete meal REST API

    public Map<String,Boolean> deleteMeal(int id){
        Meal meal =mealRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id " +id));

        mealRepo.delete(meal);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return response;
    }



}

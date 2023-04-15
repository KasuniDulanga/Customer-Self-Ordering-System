package com.app.restaurant.service;

import com.app.restaurant.dto.MealIngredientDTO;
import com.app.restaurant.exception.ResourceNotFoundException;
import com.app.restaurant.model.Ingredient;
import com.app.restaurant.model.Meal;
import com.app.restaurant.model.MealIngredient;
import com.app.restaurant.repository.IngredientRepository;
import com.app.restaurant.repository.MealIngredientrepository;
import com.app.restaurant.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class MealIngredientService {

    @Autowired
    MealIngredientrepository mealingredientrepo;

    @Autowired
    IngredientRepository ingredientRepo;
    @Autowired
    MealRepository mealRepo;

    public List<MealIngredient> getAllIngredientByMealId(int mealid){
        Meal meal =mealRepo.findById(mealid).orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id " +mealid));
        return mealingredientrepo.findAllByMeal(meal);

    }
    public void addMealIngredient(int id,List<MealIngredientDTO> listIngredient){
        Meal meal =mealRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id " +id));

        for(MealIngredientDTO l : listIngredient) {
            if (l.getValue() != 0) {
                Ingredient ing = ingredientRepo.findById(l.getIngredient_id()).orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id "));
                MealIngredient newMealIngredient = new MealIngredient();
                newMealIngredient.setMeal(meal);
                newMealIngredient.setIngredient(ing);
                newMealIngredient.setValue(l.getValue());

                mealingredientrepo.save(newMealIngredient);
            }
        }
    }

    public void updateMealIngredient(int id,List<MealIngredientDTO> listIngredient){
        Meal meal =mealRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id " +id));
        System.out.print(meal.getMeal_id());
        for(MealIngredientDTO l : listIngredient) {
            if (l.getValue() != 0) {
                Ingredient ing = ingredientRepo.findById(l.getIngredient_id()).orElseThrow(() -> new ResourceNotFoundException("Meal not exist with id "));
                MealIngredient updateMealIngredient = mealingredientrepo.findByMealAndIngredient(meal,ing);

                if(updateMealIngredient == null){
                    MealIngredient newMealIngredient = new MealIngredient();
                    newMealIngredient.setMeal(meal);
                    newMealIngredient.setIngredient(ing);
                    newMealIngredient.setValue(l.getValue());

                    mealingredientrepo.save(newMealIngredient);

                }

                else{
                    updateMealIngredient.setMeal(meal);
                    updateMealIngredient.setIngredient(ing);
                    updateMealIngredient.setValue(l.getValue());
                    mealingredientrepo.save(updateMealIngredient);
                }



            }
        }
    }
}

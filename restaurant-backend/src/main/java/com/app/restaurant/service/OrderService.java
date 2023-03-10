package com.app.restaurant.service;

import com.app.restaurant.model.Meal;
import com.app.restaurant.model.Order;
import com.app.restaurant.model.ShoppingCart;
import com.app.restaurant.repository.MealRepository;
import com.app.restaurant.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private OrderRepository orderRepo;
    private MealRepository mealRepo;

    public OrderService(OrderRepository orderRepo, MealRepository mealRepo) {
        this.orderRepo = orderRepo;
        this.mealRepo = mealRepo;
    }

    public Order getOrderDetail(int orderId) {
        Optional<Order> order = this.orderRepo.findById(orderId);
        return order.isPresent() ? order.get() : null;
    }

    public double getCartAmount(List<ShoppingCart> shoppingCartList) {

        double totalCartAmount = 0f;
        double singleCartAmount = 0f;

        for (ShoppingCart cart : shoppingCartList) {

            int mealId = cart.getMealId();
            Optional<Meal> meal = mealRepo.findById(mealId);
            if (meal.isPresent()) {
                Meal meal1 = meal.get();
                singleCartAmount = cart.getQuantity() * meal1.getPrice();
                totalCartAmount = totalCartAmount + singleCartAmount;
                cart.setMealName(meal1.getMealName());
                cart.setAmount(singleCartAmount);

            }
        }
        return totalCartAmount;
    }

    public Order saveOrder(Order order) {
        return orderRepo.save(order);
    }
}

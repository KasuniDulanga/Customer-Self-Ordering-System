package com.app.restaurant.service;

import com.app.restaurant.exception.ResourceNotFoundException;
import com.app.restaurant.model.Employee;
import com.app.restaurant.model.Meal;
import com.app.restaurant.model.Order;
import com.app.restaurant.model.ShoppingCart;
import com.app.restaurant.repository.MealRepository;
import com.app.restaurant.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepo;

    @Autowired
    private MealRepository mealRepo;

    public OrderService(OrderRepository orderRepo, MealRepository mealRepo) {
        this.orderRepo = orderRepo;
        this.mealRepo = mealRepo;
    }

    public List<Order> getAllPendingOrders(){
        return orderRepo.findAllByStatusIgnoreCase("pending");
    }

    public List<Order> getAllAcceptedOrders(){
        return orderRepo.findAllByStatusIgnoreCase("accepted");
    }

    public List<Order> getAllReadyOrders(){
        return orderRepo.findAllByStatusIgnoreCase("ready");
    }

    public List<Order> getAllWaiterAcceptedOrders(){
        return orderRepo.findAllByStatusIgnoreCase("waiteraccepted");
    }

    public List<Order> getAllServedOrders(){
        return orderRepo.findAllByStatusIgnoreCase("served");
    }

    public Order getOrderDetail(int orderId) {
        Optional<Order> order = this.orderRepo.findById(orderId);
        return order.isPresent() ? order.get() : null;
    }


    public Order changeOrderStatus(int orderId,String status){
        Order updateOrder = orderRepo.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("Order not exist with id " +orderId));
        updateOrder.setStatus(status);

        orderRepo.save(updateOrder);

        return updateOrder;
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

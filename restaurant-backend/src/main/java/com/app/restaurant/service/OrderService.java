package com.app.restaurant.service;

import com.app.restaurant.exception.ResourceNotFoundException;
import com.app.restaurant.model.Employee;
import com.app.restaurant.model.Meal;
import com.app.restaurant.model.Order;
import com.app.restaurant.model.ShoppingCart;
import com.app.restaurant.repository.EmployeeRepository;
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

    @Autowired
    private EmployeeRepository employeeRepository;

    public OrderService(OrderRepository orderRepo, MealRepository mealRepo,
                        EmployeeRepository employeeRepository) {
        this.orderRepo = orderRepo;
        this.mealRepo = mealRepo;
        this.employeeRepository = employeeRepository;
    }

    public List<Order> getAllPendingOrders(){
        return orderRepo.findAllByStatusIgnoreCase("pending");
    }

    public List<Order> getAllAcceptedOrders(int id){
        Employee emp = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));
        return orderRepo.findAllByStatusIgnoreCaseAndCook("accepted",emp);
    }

    public List<Order> getAllReadyOrders(){
        return orderRepo.findAllByStatusIgnoreCase("ready");
    }

    public List<Order> getAllWaiterAcceptedOrders(int id){
        Employee emp = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " +id));
        return orderRepo.findAllByStatusIgnoreCaseAndWaiter("served",emp);

    }

    public List<Order> getAllServedOrders(int id){
        return orderRepo.findAllByStatusIgnoreCase("billed");
    }

    public Order getOrderDetail(int orderId) {
        Optional<Order> order = this.orderRepo.findById(orderId);
        return order.isPresent() ? order.get() : null;
    }


    public Order changeOrderStatus(int orderId,String status,int id){
        Order updateOrder = orderRepo.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("Order not exist with id " +orderId));
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Order not exist with id " +id));

        updateOrder.setStatus(status);
        if(employee.getRoleId() == 2)
            updateOrder.setCook(employee);

        if(employee.getRoleId() == 3)
            updateOrder.setWaiter(employee);

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

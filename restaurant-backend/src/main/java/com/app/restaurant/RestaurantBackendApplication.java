package com.app.restaurant;

 import com.app.restaurant.model.Employee;
 import com.app.restaurant.repository.EmployeeRepository;
 import org.springframework.beans.factory.annotation.Autowired;
import com.app.restaurant.model.Meal;
import com.app.restaurant.model.Role;
import com.app.restaurant.repository.MealRepository;
import com.app.restaurant.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestaurantBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantBackendApplication.class, args);
	}

	 @Autowired
	 private EmployeeRepository employeeRepo;

	@Autowired
	private MealRepository mealRepo;

	@Autowired
	private RoleRepository roleRepo;

	@Override
	public void run(String... args) throws Exception {
//		Role role1 = new Role();
//		role1.setRoleName("Admin");
//		roleRepo.save(role1);

//		Role role2 = new Role();
//		role2.setRoleName("Cook");
//		roleRepo.save(role2);
//
//		Role role3 = new Role();
//		role3 .setRoleName("Waiter");
//		roleRepo.save(role3);

//		Employee employee = new Employee();
//		employee.setFirstName("Supun");
//		employee.setLastName("Perera");
//		employee.setEmail("pererasupun@gmail.com");
//		employee.setPassword("supun@cook");
//		employee.setRoleId(1);
//		employee.setAddress("258/24,Arangala, Malabe");
//		employee.setPhone_no("0714830229");
//		employeeRepo.save(employee);

//		Meal meal = new Meal();
//		meal.setMealName("Chcken Fried Rice");
//		meal.setCategory("Rice");
//		meal.setDescription("Macfood Special");
//		meal.setPrice(1200.00);
//		mealRepo.save(meal);
//
//		Meal meal1 = new Meal();
//		meal1.setMealName("Beef Fried Rice");
//		meal1.setCategory("Rice");
//		meal1.setDescription("Macfood Normal");
//		meal1.setPrice(1500.00);
//		mealRepo.save(meal1);
//
//		Meal meal2 = new Meal();
//		meal2.setMealName("Fish Fried Rice");
//		meal2.setCategory("Rice");
//		meal2.setDescription("Special Macfood fish with vegetable mix");
//		meal2.setPrice(1000.00);
//		mealRepo.save(meal2);
//
//		Meal meal3 = new Meal();
//		meal3.setMealName("Chicken Noodles");
//		meal3.setCategory("Noodles");
//		meal3.setDescription("Special MacFood noodles");
//		meal3.setPrice(1000.00);
//		mealRepo.save(meal3);
//
//		Meal meal4 = new Meal();
//		meal4.setMealName("Mix Noodles");
//		meal4.setCategory("Noodles");
//		meal4.setDescription("Special MacFood noodles without beef");
//		meal4.setPrice(1200.00);
//		mealRepo.save(meal4);


	}
}

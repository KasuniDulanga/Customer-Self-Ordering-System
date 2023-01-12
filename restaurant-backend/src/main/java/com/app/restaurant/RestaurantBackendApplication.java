package com.app.restaurant;

// import com.app.restaurant.model.Employee;
// import com.app.restaurant.repository.EmployeeRepository;
// import org.springframework.beans.factory.annotation.Autowired;
import com.app.restaurant.model.Meal;
import com.app.restaurant.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestaurantBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantBackendApplication.class, args);
	}

	// @Autowired
	// private EmployeeRepository employeeRepo;

	@Autowired
	private MealRepository mealRepo;


	@Override
	public void run(String... args) throws Exception {
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

//		Employee employee = new Employee();
//		employee.setFirstName("Supun");
//		employee.setLastName("Perera");
//		employee.setEmail("pererasupun@gmail.com");
//		employee.setPassword("supun@cook");
//		employee.setJob_role("Cook");
//		employee.setAddress("258/24,Arangal, Malabe");
//		employee.setPhone_no("0714830229");
//		employeeRepo.save(employee);
	}
}

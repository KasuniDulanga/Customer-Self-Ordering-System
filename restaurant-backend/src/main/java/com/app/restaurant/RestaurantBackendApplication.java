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
//
//		Role role2 = new Role();
//		role2.setRoleName("Cook");
//		roleRepo.save(role2);
//
//		Role role3 = new Role();
//		role3 .setRoleName("Waiter");
//		roleRepo.save(role3);
//
//		Employee employee = new Employee();
//		employee.setFirstName("Supun");
//		employee.setLastName("Perera");
//		employee.setEmail("pererasupun@gmail.com");
//		employee.setPassword("supun@cook");
//		employee.setRoleId(2);
//		employee.setAddress("258/24,Arangala, Malabe");
//		employee.setPhone_no("0714830229");
//		employeeRepo.save(employee);
//
//		Employee employee1 = new Employee();
//		employee1.setFirstName("Chamath");
//		employee1.setLastName("Silva");
//		employee1.setEmail("chamathsilva@gmail.com");
//		employee1.setPassword("chamath@waiter");
//		employee1.setRoleId(3);
//		employee1.setAddress("2/A,Sahas Rd, Benthara");
//		employee1.setPhone_no("0718045610");
//		employeeRepo.save(employee1);
//
//		Employee employee2 = new Employee();
//		employee2.setFirstName("Saduni");
//		employee2.setLastName("Nimesha");
//		employee2.setEmail("nimeshasaduni@gmail.com");
//		employee2.setPassword("saduni@cook");
//		employee2.setRoleId(2);
//		employee2.setAddress("25/B,Koshena Rd, Kaduwela");
//		employee2.setPhone_no("0767830229");
//		employeeRepo.save(employee2);
//
//		Employee employee3 = new Employee();
//		employee3.setFirstName("Vishal");
//		employee3.setLastName("Ranawaka");
//		employee3.setEmail("ranawakavishal@gmail.com");
//		employee3.setPassword("vishal@waiter");
//		employee3.setRoleId(3);
//		employee3.setAddress("30/1A,Dethota Rd,Nugegoda");
//		employee3.setPhone_no("0782532691");
//		employeeRepo.save(employee3);
//
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

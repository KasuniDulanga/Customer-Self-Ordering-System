package com.app.restaurant;

// import com.app.restaurant.model.Employee;
// import com.app.restaurant.repository.EmployeeRepository;
// import org.springframework.beans.factory.annotation.Autowired;
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

	@Override
	public void run(String... args) throws Exception {
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

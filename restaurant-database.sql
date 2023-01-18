-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema RestaurantDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema RestaurantDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `RestaurantDB` DEFAULT CHARACTER SET utf8 ;
USE `RestaurantDB` ;

-- -----------------------------------------------------
-- Table `RestaurantDB`.`Role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestaurantDB`.`Role` (
  `role_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`role_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RestaurantDB`.`Employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestaurantDB`.`Employee` (
  `employee_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `gmail` VARCHAR(255) NOT NULL,
  `phone_no` VARCHAR(50) NULL,
  `address` VARCHAR(255) NULL,
  `role_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`employee_id`),
  INDEX `fk_Employee_Role1_idx` (`role_id` ASC) ,
  CONSTRAINT `fk_Employee_Role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `RestaurantDB`.`Role` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RestaurantDB`.`Customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestaurantDB`.`Customer` (
  `customer_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `customer_name` VARCHAR(255) NOT NULL,
  `customer_phn` VARCHAR(45) NULL,
  PRIMARY KEY (`customer_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RestaurantDB`.`Order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestaurantDB`.`Order` (
  `order_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `table_no` INT NOT NULL,
  `net_amount` DOUBLE NULL,
  `status` VARCHAR(255) NULL,
  `customer_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`order_id`),
  INDEX `fk_Order_Customer1_idx` (`customer_id` ASC) ,
  CONSTRAINT `fk_Order_Customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `RestaurantDB`.`Customer` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RestaurantDB`.`Meal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestaurantDB`.`Meal` (
  `meal_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `meal_name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) CHARACTER SET 'ascii' NOT NULL,
  `price` DOUBLE NOT NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`meal_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RestaurantDB`.`Ingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestaurantDB`.`Ingredient` (
  `ingredient_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `ingredient_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ingredient_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RestaurantDB`.`OrderDetails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestaurantDB`.`OrderDetails` (
  `order_id` BIGINT(20) NOT NULL,
  `meal_id` BIGINT(20) NOT NULL,
  `note` VARCHAR(255) NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`order_id`, `meal_id`),
  INDEX `fk_Order_has_Meal_Meal1_idx` (`meal_id` ASC) ,
  INDEX `fk_Order_has_Meal_Order1_idx` (`order_id` ASC) ,
  CONSTRAINT `fk_Order_has_Meal_Order1`
    FOREIGN KEY (`order_id`)
    REFERENCES `RestaurantDB`.`Order` (`order_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_has_Meal_Meal1`
    FOREIGN KEY (`meal_id`)
    REFERENCES `RestaurantDB`.`Meal` (`meal_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RestaurantDB`.`EmployeeHandlesOrder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestaurantDB`.`EmployeeHandlesOrder` (
  `employee_id` BIGINT(20) NOT NULL,
  `order_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`employee_id`, `order_id`),
  INDEX `fk_Employee_has_Order_Order1_idx` (`order_id` ASC) ,
  INDEX `fk_Employee_has_Order_Employee1_idx` (`employee_id` ASC) ,
  CONSTRAINT `fk_Employee_has_Order_Employee1`
    FOREIGN KEY (`employee_id`)
    REFERENCES `RestaurantDB`.`Employee` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Employee_has_Order_Order1`
    FOREIGN KEY (`order_id`)
    REFERENCES `RestaurantDB`.`Order` (`order_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RestaurantDB`.`MealIngredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RestaurantDB`.`MealIngredient` (
  `meal_id` BIGINT(20) NOT NULL,
  `ingredient_id` BIGINT(20) NOT NULL,
  `Amount` BIGINT(20) NULL,
  PRIMARY KEY (`meal_id`, `ingredient_id`),
  INDEX `fk_Meal_has_Ingredient_Ingredient1_idx` (`ingredient_id` ASC) ,
  INDEX `fk_Meal_has_Ingredient_Meal1_idx` (`meal_id` ASC) ,
  CONSTRAINT `fk_Meal_has_Ingredient_Meal1`
    FOREIGN KEY (`meal_id`)
    REFERENCES `RestaurantDB`.`Meal` (`meal_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Meal_has_Ingredient_Ingredient1`
    FOREIGN KEY (`ingredient_id`)
    REFERENCES `RestaurantDB`.`Ingredient` (`ingredient_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

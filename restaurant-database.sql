-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema MacfoodRestDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema MacfoodRestDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MacfoodRestDB` ;
-- -----------------------------------------------------
-- Schema macfoodrestdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema macfoodrestdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `macfoodrestdb` DEFAULT CHARACTER SET latin1 ;
USE `MacfoodRestDB` ;

-- -----------------------------------------------------
-- Table `MacfoodRestDB`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MacfoodRestDB`.`role` (
  `role_id` INT(20) NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`role_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MacfoodRestDB`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MacfoodRestDB`.`employee` (
  `employee_id` INT(20) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `gmail` VARCHAR(255) NOT NULL,
  `phone_no` VARCHAR(50) NOT NULL,
  `address` VARCHAR(255) NULL,
  `role_id` INT(20) NOT NULL,
  PRIMARY KEY (`employee_id`, `role_id`),
  INDEX `fk_employee_Role_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_employee_Role`
    FOREIGN KEY (`role_id`)
    REFERENCES `MacfoodRestDB`.`role` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MacfoodRestDB`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MacfoodRestDB`.`customer` (
  `customer_id` INT(20) NOT NULL AUTO_INCREMENT,
  `customer_name` VARCHAR(255) NOT NULL,
  `customer_phn` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`customer_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MacfoodRestDB`.`mealorder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MacfoodRestDB`.`mealorder` (
  `order_id` INT(20) NOT NULL AUTO_INCREMENT,
  `order_description` VARCHAR(255) NULL,
  `status` VARCHAR(255) NULL,
  `table_no` INT(20) NOT NULL,
  `customer_id` INT(20) NOT NULL,
  PRIMARY KEY (`order_id`, `customer_id`),
  INDEX `fk_mealorder_customer1_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `fk_mealorder_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `MacfoodRestDB`.`customer` (`customer_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MacfoodRestDB`.`shopping_cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MacfoodRestDB`.`shopping_cart` (
  `id` INT(20) NOT NULL AUTO_INCREMENT,
  `amount` DOUBLE NOT NULL,
  `meal_id` INT(20) NOT NULL,
  `meal_name` VARCHAR(255) NULL,
  `quantity` INT(20) NOT NULL,
  `order_id` INT(20) NOT NULL,
  PRIMARY KEY (`id`, `order_id`),
  INDEX `fk_shopping_cart_mealorder1_idx` (`order_id` ASC) VISIBLE,
  CONSTRAINT `fk_shopping_cart_mealorder1`
    FOREIGN KEY (`order_id`)
    REFERENCES `MacfoodRestDB`.`mealorder` (`order_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MacfoodRestDB`.`ingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MacfoodRestDB`.`ingredient` (
  `ingredient_id` INT(20) NOT NULL AUTO_INCREMENT,
  `ingredient_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ingredient_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MacfoodRestDB`.`meal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MacfoodRestDB`.`meal` (
  `meal_id` INT(20) NOT NULL AUTO_INCREMENT,
  `meal_name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`meal_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `MacfoodRestDB`.`mealingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MacfoodRestDB`.`mealingredient` (
  `ingredient_id` INT(20) NOT NULL,
  `meal_id` INT(20) NOT NULL,
  `amount` INT(20) NOT NULL,
  PRIMARY KEY (`ingredient_id`, `meal_id`),
  INDEX `fk_Ingredient_has_meal_meal1_idx` (`meal_id` ASC) VISIBLE,
  INDEX `fk_Ingredient_has_meal_Ingredient1_idx` (`ingredient_id` ASC) VISIBLE,
  CONSTRAINT `fk_Ingredient_has_meal_Ingredient1`
    FOREIGN KEY (`ingredient_id`)
    REFERENCES `MacfoodRestDB`.`ingredient` (`ingredient_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ingredient_has_meal_meal1`
    FOREIGN KEY (`meal_id`)
    REFERENCES `MacfoodRestDB`.`meal` (`meal_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `macfoodrestdb` ;

-- -----------------------------------------------------
-- Table `macfoodrestdb`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `macfoodrestdb`.`comments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `macfoodrestdb`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `macfoodrestdb`.`customer` (
  `customer_id` INT(20) NOT NULL AUTO_INCREMENT,
  `customer_name` VARCHAR(255) NOT NULL,
  `customer_phn` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`customer_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `macfoodrestdb`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `macfoodrestdb`.`role` (
  `role_id` INT(20) NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`role_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `macfoodrestdb`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `macfoodrestdb`.`employee` (
  `employee_id` INT(20) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `gmail` VARCHAR(255) NOT NULL,
  `phone_no` VARCHAR(50) NOT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `role_id` INT(20) NOT NULL,
  PRIMARY KEY (`employee_id`, `role_id`),
  INDEX `fk_employee_Role_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_employee_Role`
    FOREIGN KEY (`role_id`)
    REFERENCES `macfoodrestdb`.`role` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `macfoodrestdb`.`hibernate_sequence`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `macfoodrestdb`.`hibernate_sequence` (
  `next_val` BIGINT(20) NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `macfoodrestdb`.`ingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `macfoodrestdb`.`ingredient` (
  `ingredient_id` INT(20) NOT NULL AUTO_INCREMENT,
  `ingredient_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ingredient_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `macfoodrestdb`.`meal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `macfoodrestdb`.`meal` (
  `meal_id` INT(20) NOT NULL AUTO_INCREMENT,
  `meal_name` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `image` MEDIUMBLOB NULL DEFAULT NULL,
  PRIMARY KEY (`meal_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `macfoodrestdb`.`mealingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `macfoodrestdb`.`mealingredient` (
  `ingredient_id` INT(11) NOT NULL,
  `meal_id` INT(11) NOT NULL,
  `value` DOUBLE NOT NULL,
  PRIMARY KEY (`ingredient_id`, `meal_id`),
  INDEX `FKjphf9lqd595x9i186ni9metd9` (`meal_id` ASC) VISIBLE,
  CONSTRAINT `FKjphf9lqd595x9i186ni9metd9`
    FOREIGN KEY (`meal_id`)
    REFERENCES `macfoodrestdb`.`meal` (`meal_id`),
  CONSTRAINT `FKt5j29au80itwltg9smn777ah8`
    FOREIGN KEY (`ingredient_id`)
    REFERENCES `macfoodrestdb`.`ingredient` (`ingredient_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `macfoodrestdb`.`mealorder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `macfoodrestdb`.`mealorder` (
  `order_id` INT(11) NOT NULL AUTO_INCREMENT,
  `order_description` VARCHAR(255) NULL DEFAULT NULL,
  `status` VARCHAR(255) NULL DEFAULT NULL,
  `table_no` INT(11) NOT NULL,
  `customer_id` INT(11) NULL DEFAULT NULL,
  `date` VARCHAR(255) NULL DEFAULT NULL,
  `invoice_number` INT(11) NOT NULL,
  `total_amount` DOUBLE NOT NULL,
  `cook_id` INT(11) NULL DEFAULT NULL,
  `waiter_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  INDEX `FKls2j9vtmdo0168guhyv5ki99m` (`customer_id` ASC) VISIBLE,
  INDEX `FK70nbwx599pw6ul3fm68ypkm49` (`cook_id` ASC) VISIBLE,
  INDEX `FK3hepaalgxooj72tjgkbssn3l9` (`waiter_id` ASC) VISIBLE,
  CONSTRAINT `FK3hepaalgxooj72tjgkbssn3l9`
    FOREIGN KEY (`waiter_id`)
    REFERENCES `macfoodrestdb`.`employee` (`employee_id`),
  CONSTRAINT `FK70nbwx599pw6ul3fm68ypkm49`
    FOREIGN KEY (`cook_id`)
    REFERENCES `macfoodrestdb`.`employee` (`employee_id`),
  CONSTRAINT `FKls2j9vtmdo0168guhyv5ki99m`
    FOREIGN KEY (`customer_id`)
    REFERENCES `macfoodrestdb`.`customer` (`customer_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `macfoodrestdb`.`shopping_cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `macfoodrestdb`.`shopping_cart` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `amount` DOUBLE NOT NULL,
  `meal_id` INT(11) NOT NULL,
  `meal_name` VARCHAR(255) NULL DEFAULT NULL,
  `quantity` INT(11) NOT NULL,
  `order_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKe14a15nuhmedaygrcwwee605m` (`order_id` ASC) VISIBLE,
  CONSTRAINT `FKe14a15nuhmedaygrcwwee605m`
    FOREIGN KEY (`order_id`)
    REFERENCES `macfoodrestdb`.`mealorder` (`order_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 44
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

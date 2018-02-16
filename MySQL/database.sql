-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema workchang
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema workchang
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workchang` DEFAULT CHARACTER SET utf8 ;
USE `workchang` ;

-- -----------------------------------------------------
-- Table `workchang`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`Users` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `nationalID` INT NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `type` INT NOT NULL,
  `addressLine1` VARCHAR(45) NULL,
  `addressLine2` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `cedula_UNIQUE` (`nationalID` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workchang`.`Clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`Clients` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `UserID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Clientes_Usuario_idx` (`UserID` ASC),
  CONSTRAINT `fk_Clientes_Usuario`
    FOREIGN KEY (`UserID`)
    REFERENCES `workchang`.`Users` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workchang`.`Cars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`Cars` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `serial` VARCHAR(255) NOT NULL,
  `licensePlate` VARCHAR(7) NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `year` INT NOT NULL,
  `active` TINYINT NOT NULL,
  `Owner` INT NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `serial_UNIQUE` (`serial` ASC),
  UNIQUE INDEX `placa_UNIQUE` (`licensePlate` ASC),
  INDEX `fk_Automovil_Clientes1_idx` (`Owner` ASC),
  CONSTRAINT `fk_Automovil_Clientes1`
    FOREIGN KEY (`Owner`)
    REFERENCES `workchang`.`Clients` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workchang`.`Appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`Appointments` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `CarID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Cita_Automovil1_idx` (`CarID` ASC),
  CONSTRAINT `fk_Cita_Automovil1`
    FOREIGN KEY (`CarID`)
    REFERENCES `workchang`.`Cars` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workchang`.`Replacements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`Replacements` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `partNumber` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `inStock` INT NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `nParte_UNIQUE` (`partNumber` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workchang`.`Mechanics`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`Mechanics` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `UserID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Mecanico_Usuario1_idx` (`UserID` ASC),
  CONSTRAINT `fk_Mecanico_Usuario1`
    FOREIGN KEY (`UserID`)
    REFERENCES `workchang`.`Users` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workchang`.`RepairOrders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`RepairOrders` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `entryDate` DATE NOT NULL,
  `exitDate` DATE NULL,
  `AppointmentID` INT NOT NULL,
  `MechanicID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_OrdenRepacion_Cita1_idx` (`AppointmentID` ASC),
  INDEX `fk_OrdenRepacion_Mecanico1_idx` (`MechanicID` ASC),
  CONSTRAINT `fk_OrdenRepacion_Cita1`
    FOREIGN KEY (`AppointmentID`)
    REFERENCES `workchang`.`Appointments` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_OrdenRepacion_Mecanico1`
    FOREIGN KEY (`MechanicID`)
    REFERENCES `workchang`.`Mechanics` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workchang`.`RepairsReplacements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`RepairsReplacements` (
  `RepairOrder` INT NOT NULL,
  `Replacement` INT NOT NULL,
  PRIMARY KEY (`RepairOrder`, `Replacement`),
  INDEX `fk_OrdenRepacion_has_Repuestos_Repuestos1_idx` (`Replacement` ASC),
  INDEX `fk_OrdenRepacion_has_Repuestos_OrdenRepacion1_idx` (`RepairOrder` ASC),
  CONSTRAINT `fk_OrdenRepacion_has_Repuestos_OrdenRepacion1`
    FOREIGN KEY (`RepairOrder`)
    REFERENCES `workchang`.`RepairOrders` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_OrdenRepacion_has_Repuestos_Repuestos1`
    FOREIGN KEY (`Replacement`)
    REFERENCES `workchang`.`Replacements` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workchang`.`Managers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`Managers` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `UserID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Gerente_Usuario1_idx` (`UserID` ASC),
  CONSTRAINT `fk_Gerente_Usuario1`
    FOREIGN KEY (`UserID`)
    REFERENCES `workchang`.`Users` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `workchang`.`Administrators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`Administrators` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `UserID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Administrador_Usuario1_idx` (`UserID` ASC),
  CONSTRAINT `fk_Administrador_Usuario1`
    FOREIGN KEY (`UserID`)
    REFERENCES `workchang`.`Users` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

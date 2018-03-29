-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema workchang
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema workchang
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workchang` DEFAULT CHARACTER SET utf8 ;
USE `workchang` ;

-- -----------------------------------------------------
-- Table `workchang`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`users` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `nationalID` INT(11) NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `type` INT(11) NULL DEFAULT NULL,
  `addressLine1` VARCHAR(45) NULL DEFAULT NULL,
  `addressLine2` VARCHAR(45) NULL DEFAULT NULL,
  `city` VARCHAR(45) NULL DEFAULT NULL,
  `photoLink` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `workchang`.`administrators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`administrators` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `UserID` INT(11) NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Administrador_Usuario1_idx` (`UserID` ASC),
  CONSTRAINT `fk_Administrador_Usuario1`
    FOREIGN KEY (`UserID`)
    REFERENCES `workchang`.`users` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `workchang`.`cars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`cars` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `serial` VARCHAR(255) NOT NULL,
  `licensePlate` VARCHAR(7) NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `year` INT(11) NOT NULL,
  `active` TINYINT(4) NOT NULL,
  `OwnerID` VARCHAR(45) NOT NULL,
  `photoLink` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `serial_UNIQUE` (`serial` ASC),
  UNIQUE INDEX `placa_UNIQUE` (`licensePlate` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `workchang`.`appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`appointments` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `checkout` TINYINT(4) NOT NULL DEFAULT '0',
  `CarID` INT(11) NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Cita_Automovil1_idx` (`CarID` ASC),
  CONSTRAINT `fk_Cita_Automovil1`
    FOREIGN KEY (`CarID`)
    REFERENCES `workchang`.`cars` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `workchang`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`clients` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `UserID` INT(11) NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Clientes_Usuario_idx` (`UserID` ASC),
  CONSTRAINT `fk_Clientes_Usuario`
    FOREIGN KEY (`UserID`)
    REFERENCES `workchang`.`users` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `workchang`.`mechanics`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`mechanics` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `UserID` INT(11) NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Mecanico_Usuario1_idx` (`UserID` ASC),
  CONSTRAINT `fk_Mecanico_Usuario1`
    FOREIGN KEY (`UserID`)
    REFERENCES `workchang`.`users` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `workchang`.`repairorders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`repairorders` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `entryDate` DATE NOT NULL,
  `exitDate` DATE NULL DEFAULT NULL,
  `AppointmentID` INT(11) NOT NULL,
  `MechanicID` INT(11) NOT NULL,
  `QRCode` VARCHAR(255) NOT NULL,
  `diagnostic` LONGTEXT NOT NULL,
  `ready` TINYINT(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  INDEX `fk_OrdenRepacion_Cita1_idx` (`AppointmentID` ASC),
  INDEX `fk_OrdenRepacion_Mecanico1_idx` (`MechanicID` ASC),
  CONSTRAINT `fk_OrdenRepacion_Cita1`
    FOREIGN KEY (`AppointmentID`)
    REFERENCES `workchang`.`appointments` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_OrdenRepacion_Mecanico1`
    FOREIGN KEY (`MechanicID`)
    REFERENCES `workchang`.`mechanics` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `workchang`.`repairorders` 
CHANGE COLUMN `QRCode` `QRCode` LONGTEXT NOT NULL COMMENT '\n' ;

-- -----------------------------------------------------
-- Table `workchang`.`detailsRO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`detailsRO` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `photoURL` LONGTEXT NULL DEFAULT NULL,
  `details` LONGTEXT NULL DEFAULT NULL,
  `repairorderID` INT(11) NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `repairorderID_idx` (`repairorderID` ASC),
  CONSTRAINT `repairorderID`
    FOREIGN KEY (`repairorderID`)
    REFERENCES `workchang`.`repairorders` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `workchang`.`managers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`managers` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `UserID` INT(11) NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Gerente_Usuario1_idx` (`UserID` ASC),
  CONSTRAINT `fk_Gerente_Usuario1`
    FOREIGN KEY (`UserID`)
    REFERENCES `workchang`.`users` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `workchang`.`replacements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`replacements` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `partNumber` INT(11) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `inStock` INT(11) NOT NULL,
  `forModel` VARCHAR(225) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `nParte_UNIQUE` (`partNumber` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `workchang`.`repairsreplacements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workchang`.`repairsreplacements` (
  `RepairOrder` INT(11) NOT NULL,
  `Replacement` INT(11) NOT NULL,
  PRIMARY KEY (`RepairOrder`, `Replacement`),
  INDEX `fk_OrdenRepacion_has_Repuestos_Repuestos1_idx` (`Replacement` ASC),
  INDEX `fk_OrdenRepacion_has_Repuestos_OrdenRepacion1_idx` (`RepairOrder` ASC),
  CONSTRAINT `fk_OrdenRepacion_has_Repuestos_OrdenRepacion1`
    FOREIGN KEY (`RepairOrder`)
    REFERENCES `workchang`.`repairorders` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_OrdenRepacion_has_Repuestos_Repuestos1`
    FOREIGN KEY (`Replacement`)
    REFERENCES `workchang`.`replacements` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

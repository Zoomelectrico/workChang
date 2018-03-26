USE workchang;

-- Archivo de Queries (Trancados del proyecto) cambiar los `#` por valores de ID o de los respectivos campos, volar los `` y todo!!!

-- Este query le permite a un clente ver todas las citas que pidio de su carro, hay que modificar para que no trauga betas viejos
SELECT `appointments`.`ID`
    ,`cars`.`brand`
    ,`cars`.`model`
    ,`cars`.`licensePlate`
    ,if(`appointments`.`checkout` = 0, 'En lista de espera', 'En el taller') AS `estado` 
FROM `users`
INNER JOIN `clients` ON `users`.`ID` = `clients`.`UserID` 
INNER JOIN `cars` ON `clients`.`ID` = `cars`.`OwnerID` 
INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID`
LEFT JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID` 
WHERE `clients`.`UserID` = `#` AND `repairorder`.`ready` = 1

--
SELECT `appointments`.`ID`, `cars`.`model`, `cars`.`brand`, `cars`.`licensePlate` FROM `appointments` 
INNER JOIN `cars` ON `appointments`.`CarID` = `cars`.`ID`
WHERE `appointments`.`checkout` = 0

-- Este query le permite a un gerente ver las ordenes activas
SELECT `repairorders`.`ID`
		,`cars`.`ID` AS carID
		,`mechanics`.`ID` AS mechanicID
		,CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `mechanicName`
		,CONCAT(`cars`.`brand`, ' ', `cars`.`model`) AS `carName`
		,`cars`.`licensePlate` AS `carLicensePlate` 
FROM `repairorders`
INNER JOIN `appointments` ON `repairorders`.`AppointmentID` = `appointments`.`ID`
INNER JOIN `cars` ON `appointments`.`CarID` = `cars`.`ID`
INNER JOIN `mechanics` ON `repairorders`.`MechanicID` = `mechanics`.`ID`
INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID`
WHERE `repairorders`.`exitDate` IS NULL;

-- Permite ver el estado actual de una orden de reparacion
SELECT `repairorders`.`ID` AS `repairOrdersID`
		,CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `mechanicName`
		,CONCAT(`cars`.`brand`, ' ', `cars`.`model`) AS `carName`
		,`cars`.`licensePlate` AS `licensePlate`
		,`repairorders`.`entryDate` AS `entryDate`
		,CONCAT(`replacements`.`name`, ' ', `replacements`.`forModel`) AS `replacement`
FROM `repairorders`
INNER JOIN `mechanics` ON `repairorders`.`MechanicID` = `mechanics`.`ID`
INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID`
INNER JOIN `appointments` ON `repairorders`.`AppointmentID` = `appointments`.`ID`
INNER JOIN `cars` ON `appointments`.`CarID` = `cars`.`ID`
LEFT JOIN `repairsreplacements` ON `repairorders`.`ID` = `repairsreplacements`.`RepairOrder`
LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID`
WHERE `repairorders`.`ID` = `#` AND `mechanics`.`ID` = `#` AND `cars`.`ID` = `#`

-- QUERIES DE GUILLEN, 

-- Historial de vehiculos por clientes
SELECT CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`, ' ') AS `carName`
		,CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `mechanicName`
    ,`repairorders`.`entryDate` AS `receptionDate`
    ,DATEDIFF(`repairorders`.`exitDate`, `repairorders`.`entryDate`) AS `totalTime`
    ,`repairorders`.`diagnostic`
		,CONCAT(`replacements`.`name`, ', marca: ', `replacements`.`brand`, ', para: ', `replacements`.`forModel`) AS `repaclementInfo`
FROM `clients`
INNER JOIN `cars` ON `clients`.`ID` = `cars`.`OwnerID`
INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID`
INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID`
INNER JOIN `mechanics` ON `repairorders`.`MechanicID` = `mechanics`.`ID`
INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID` 
LEFT JOIN `repairsreplacements` ON  `repairorders`.`ID` = `repairsreplacements`.`RepairOrder`
LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID`
WHERE `clients`.`ID` = (SELECT `clients`.`ID` FROM `clients` INNER JOIN `users` ON `users`.`ID` = `clients`.`UserID` WHERE `users`.`nationalID` = `#` AND `user`.`type` = 1)

-- Historial por mecanico
SELECT *
FROM `cars`
INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID`
INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID`
INNER JOIN `mechanics` ON `mechanics`.`ID` = `repairorders`.`MechanicID`
INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID`
LEFT JOIN `repairsreplacements` ON  `repairorders`.`ID` = `repairsreplacements`.`RepairOrder`
LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID`
WHERE `mechanics`.`ID` = (SELECT `mechanics`.`ID` FROM `mechanics` INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID` WHERE `users`.`nationalID` = `#` and `user`.`type` = 3)

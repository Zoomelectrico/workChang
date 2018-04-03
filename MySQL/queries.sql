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

SELECT `repairorders`.`ID`
,CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`, ', placa: ', `cars`.`licensePlate`) AS `carData`
,`repairorders`.`diagnostic`
,`detailsRO`.`details`
,`detailsRO`.`photoURL`
,CONCAT(`replacements`.`name`, ', marca: ', `replacements`.`brand`, ', para: ', `replacements`.`forModel`) AS `replacementData`
FROM `cars`
INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID` 
INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID`
INNER JOIN `detailsRO` ON `repairorders`.`ID` = `detailsRO`.`repairOrderID`
LEFT JOIN `repairsreplacements` ON `repairorders`.`ID` = `repairsreplacements`.`RepairOrder`
LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID`  
WHERE `repairorders`.`MechanicID` = (SELECT `mechanics`.`ID` FROM `users` INNER JOIN `mechanics` ON `users`.`ID` = `mechanics`.`UserID` WHERE `users`.`nationalID` = `#`)

SELECT CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `mechanicName`
	,CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`) AS `carName`
	,`cars`.`licensePlate`
	,`repairorders`.`ID`
FROM `appointments`
INNER JOIN  `cars` ON `appointments`.`CarID`= `cars`.`ID`
INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID`
INNER JOIN `mechanics` ON `repairorders`.`MechanicID` = `mechanics`.`ID`
INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID`
WHERE `repairorders`.`ID` = `#`

-- QUERIES DE GUILLEN, 

-- Historial de vehiculos por clientes TODO: Acomodar los Alias
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
WHERE `clients`.`ID` = (SELECT `clients`.`ID` FROM `clients` INNER JOIN `users` ON `users`.`ID` = `clients`.`UserID` WHERE `users`.`nationalID` = `#` AND `users`.`type` = 1)

-- Historial de un vehículo
SELECT CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`, ' ') AS `Car Data`
,CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `Mechanic Name`
,`repairorders`.`entryDate` AS `Reception Date`
,`repairorders`.`exitDate` AS `Exit Date`
,DATEDIFF(`repairorders`.`exitDate`, `repairorders`.`entryDate`) AS `Time in the workshop`
,`repairorders`.`diagnostic` AS `Diagnostic`
,CONCAT(`replacements`.`name`, ', marca: ', `replacements`.`brand`, ', para: ', `replacements`.`forModel`) AS `Replacement Info`
FROM `cars`
INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID`
INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID`
INNER JOIN `mechanics` ON `repairorders`.`MechanicID` = `mechanics`.`ID`
INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID` 
LEFT JOIN `repairsreplacements` ON  `repairorders`.`ID` = `repairsreplacements`.`RepairOrder`
LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID`
WHERE `cars`.`licensePlate` = `#`

-- Historial por mecanico
SELECT CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `Mechanic Name` 
,CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`) AS `Car Data`
,`cars`.`licensePlate` AS `License Plate`
,`cars`.`serial` AS `Serial`
,`repairorders`.`diagnostic` AS `Diagnostic`
,`repairorders`.`entryDate` AS `Reception Date`
,`repairorders`.`exitDate` AS `Exit Date`
,DATEDIFF(`repairorders`.`exitDate`, `repairorders`.`entryDate`) AS `Time in the workshop`
,CONCAT(`replacements`.`name`, ', marca: ', `replacements`.`brand`, ', para: ', `replacements`.`forModel`) AS `Replacement Info`
FROM `cars`
INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID`
INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID`
INNER JOIN `mechanics` ON `mechanics`.`ID` = `repairorders`.`MechanicID`
INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID`
LEFT JOIN `repairsreplacements` ON  `repairorders`.`ID` = `repairsreplacements`.`RepairOrder`
LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID`
WHERE `repairorders`.`entryDate` BETWEEN '2018-01-01' AND '2018-12-31' AND `mechanics`.`ID` = (SELECT `mechanics`.`ID` FROM `mechanics` INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID` WHERE `users`.`nationalID` = 123 and `users`.`type` = 3)

-- Historial por modelo de vehiculo
SELECT CONCAT(`users`.`firstName`, ' ', `users`.`lastName`) AS `Mechanic Name` 
,CONCAT(`cars`.`brand`, ' ', `cars`.`model`, ' ', `cars`.`year`) AS `Car Data`
,`cars`.`licensePlate` AS `License Plate`
,`cars`.`serial` AS `Serial`
,`repairorders`.`diagnostic` AS `Diagnostic`
,`repairorders`.`entryDate` AS `Reception Date`
,`repairorders`.`exitDate` AS `Exit Date`
,DATEDIFF(`repairorders`.`exitDate`, `repairorders`.`entryDate`) AS `Time in the workshop`
,CONCAT(`replacements`.`name`, ', marca: ', `replacements`.`brand`, ', para: ', `replacements`.`forModel`) AS `Replacement Info`
FROM `cars`
INNER JOIN `appointments` ON `cars`.`ID` = `appointments`.`CarID`
INNER JOIN `repairorders` ON `appointments`.`ID` = `repairorders`.`AppointmentID`
INNER JOIN `mechanics` ON `mechanics`.`ID` = `repairorders`.`MechanicID`
INNER JOIN `users` ON `mechanics`.`UserID` = `users`.`ID`
LEFT JOIN `repairsreplacements` ON  `repairorders`.`ID` = `repairsreplacements`.`RepairOrder`
LEFT JOIN `replacements` ON `repairsreplacements`.`Replacement` = `replacements`.`ID`
WHERE `repairorders`.`entryDate` BETWEEN '2018-01-01' AND '2018-12-31' AND `cars`.`model` LIKE 'aveo%'
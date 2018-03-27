# workChang
Proyecto de Sistemas de Información realizado por Abraham Chang, Germano Rojas y josé Quevedo
## Funcionalidad
WorkChang es un sistema para la gestión de taller mécanicos, su principal bondad es la capacidad de automatizar los esfuerzos de un taller de la manera más rápida y menos costosa posible, ya que mismo fue diseñado para adaptarse al flujo de trabajo con facilidad.
Entre sus funciones podemos nombrar:
* Registro de clientes y vehículos
* Registro de Personal
* Manejo de invertario de respuestos
* Control de Citas y Ordenes de Reparacion
* Generacion de Reportes
* Y más.
### Como probar WorkChang
El primer paso consiste en clonar este repositorio de git con el siguiente comando
$ git clone https://www.github.com/zoomelectrico/workChang.git
Lo siguiente es abrir la termina en la capeta del repositorio clonado y ejercutar los siguientes comandos
$ sudo npm install
$ cd angular-src
$ sudo npm install
una vez hecho eso deberá abrir dos terminales ambas en la ubicacion de la carpeta donde se clono el repositorio y ejecutar en una terminal el siguiente comando:
$ node app.js
y en la otra terminal este otro comando
$ cd angular-src
$ ng serve
Y listo podrá disfrutar de workchang.
### Frameworks o Librerias Utilizadas
* [Node](https://nodejs.org) JavaScript Enviroment
* [Express](http://expressjs.com/) Backend Framework
* [Sequelize](http://docs.sequelizejs.com/) SQL ORM 
* [Passport](http://www.passportjs.org/) Auth Library
* [QRcode](https://github.com/soldair/node-qrcode) QR Code Generation Code
* [NodeMailer](https://nodemailer.com/about/) Mail Sender Library
* [bcrypt](https://www.npmjs.com/package/bcrypt) Encryptation Library
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) JSON WEB TOKEN 
* [passport-jwt](https://www.npmjs.com/package/passport-jwt) Passport JSON WEB TOKEN
* [moment.js](https://momentjs.com/) Time library 
### Librerias del lado del cliente
* [Angular](https://angular.io) Frontend Framework
* [Bootstrap](https://getbootstrap.com) CSS Framework
* [ng-bootstrap](https://ng-bootstrap.github.io) Bootstrap wrapper for angular
* [@auth0/angular-jwt](https://github.com/auth0/angular2-jwt/tree/v1.0) JSON WEB TOKEN
const moment = require('moment');

const User = require('../models/User');
const Client = require('../models/Client');
const Mechanic = require('../models/Mechanic');
const Car = require('../models/Car');
const Appointment = require('../models/Appointment');
const RepairOrder = require('../models/RepairOrder');

const QueryInterface = {
  clientHistorical: function (nationalID) {
    let data = [];
    User.findOne({ // Busco al carajo por cedula
      where: {
        nationalID: clientNationalID
      }
    }).then((user) => {
      Client.findOne({ //Lo busco en la version cliente
        where: {
          User: user.ID
        }
      }).then(client => {
        Car.findAll({ //Busco todos los carros con su ID
          where: {
            Owner: client.ID
          }
        }).then((cars) => { // Todos los carros del cliente
          cars.forEach((car, index) => {
            let repairs = [];
            if (car.active) { // Si esta activo
              Appointment.findAll({ // Busca todas las citas sobre ese carro
                where: {
                  Car: car.ID
                }
              }).then(appointments => { //Todas las citas
                appointments.forEach(appointment => { // por cada cita encuentra su orden de reparacion
                  RepairOrder.findOne({
                    where: {
                      Appointment: appointment.ID
                    }
                  }).then(repairOrder => { // Consigo la Orden de reparacion
                    repairs.push(repairOrder); //
                  });
                });
              });
            }
            car.repairs = repairs; // creo en el objeto carro una reparacion
            data.push(car); // haces push en la data 
          });
          return data;
        });
      })
    });
  },
  carHistorical: function (licensePlate) {
    let data = [];
    Car.findOne({
      where: {
        licensePlate: licensePlate
      }
    }).then(car => {
      Appointment.findAll({
        where: {
          Car: car.ID
        }
      }).then(appointments => {
        appointments.forEach(appointment => {
          RepairOrder.findOne({
            where: {
              Appointment: appointment.ID
            }
          }).then(repair => {
            data.push(repair);            
          });
        });
        return data;
      })
    });
  },
  mechanicHistorical: function (nationalID, sDate, fDate) {
    let data = [];
    User.findOne({ // Me busco al Usuario
      where: {
        nationalID: nationalID
      }
    }).then(user => {
      Mechanic.findOne({ // Me busco al mecanico
        where: {
          User: user.ID
        }
      }).then(mechanic => {
        RepairOrder.findAll({ // Me busco todas las orderes de repacion de carajo
          where: {
            Mechanic: mechanic.ID
          }
        }).then(orders => {
          orders.forEach(order => { // Loopeo sobre las ordenes
            // Usamos momentjs para manejar las fechas
            // Si la fecha esta en el intervalo push al array
            if (moment(order.entryDate).isSameOrBefore(moment(sDate)) 
            && moment(order.entryDate).isSameOrAfter(moment(fDate))) {
              data.push(order);
            } 
          });
          return data;
        });
      });
    });
  },
  carModelHistorical: function (model, sDate, fDate) {
    let count = 0; // La cantidad 
    Car.findAll({ // Busca los carros del modelo especifico
      where: {
        model: model
      }
    }).then(cars => {
      cars.forEach(car => {
        Appointment.findAll({ // Busca las citas por carro cada carro
          where: {
            Car: car.ID
          }
        }).then(appointments => { 
          appointments.forEach(appointment => {
            RepairOrder.findOne({ // Busca las ordernes de reparacion por cada carro
              where: {
                Appointment: appointment.ID
              }
            }).then(repair => { // Verifica que la orden este en el rango de fecha
              if (moment(repair.entryDate).isSameOrBefore(moment(sDate)) 
              && moment(repair.entryDate).isSameOrAfter(momen(fDate))) {
                count += 1; // Aumenta la cantidad;
              }
            });
          });
        });
      });
      return count;
    });
  }
};

module.exports = QueryInterface;
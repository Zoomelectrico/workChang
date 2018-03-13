const Replacement = require('../models/Replacement');
const User = require('../models/User');
const Appointment = require('../models/Appointment');
const Car = require('../models/Car');
const RepairOrder = require('../models/RepairOrder');

const AdministratorController = {
  getAllReplacements: function(callback) {
    Replacement.findAll()
    .then(replacements => callback(null, replacements))
    .catch(err => callback(err, replacements));
  },
  insertReplacement: function(replacement, callback) {
    Replacement.findOne({
      where: {
        partNumber: replacement.partNumber
      }
    }).then(replacementFin => {
      if (replacementFin) {
        callback(new Error('Ya existe un Repuesto con ese numero de parte'), null);
      } else {
        Replacement.create(replacement)
        .then(replacement => callback(null, replacement))
        .catch(err => callback(err, null));
      }
    })
  },
  searchReplacementByPartNumber: function(partNumber, callback) {
    Replacement.findOne({
      where: {
        partNumber: partNumber
      }
    }).then( replacement => {
      if (replacement) {
        callback(null, replacement)
      } else {
        callback(new Error('No existe ningun repuesto registrado con ese numero de parte'), null);
      }
    }).catch(err => callback(err, null)); 
  },
  modifyReplacement: function (replacement, callback) {
    Replacement.findOne({
      where: {
        partNumber: replacement.partNumber
      }
    }).then(replacementBD  => { // Busca el repuesto con el numero de parte
      if (replacementBD) { // Si existe el repuesto
        replacementBD.update({
          name: replacement.name,
          brand: replacement.brand,
          inStock: replacement.inStock,
          forModel: replacement.forModel
        }).then(replacementBD => {callback(null, replacementBD)}).catch(err => callback(err, null)); // Llama al callback
      } else {
        callback(new Error('No hay repuestos registrados con ese número de parte'), null); // No hay ese repuesto
      }
    }).catch(err => {callback(err, null)}); // Error de la base de datos
  },
  changeRole: function (nationalID, newRole, callback) {
    User.findAll({
      where: {
        nationalID: nationalID
      }
    }).then(users  => { // Busca a todos los usuarios con esa cedula "Pueden ser varios"
      if (users) { // Si hay usuarios
        users.forEach(user => { // Recorre el vector
          if (user.type !== 1) { // Todas aquellas cuentas que no sean de clientes pueden ser cambiadas
            user.update({ // Cambia el tipo de cuenta
              type: newRole
            }).then(() => callback(null, user)).catch(err => callback(err, null)); // Llama al callback
          }
        })
      } else {
        callback(new Error('No hay usuarios registrados con esa Cédula de Identidad'), null); // No hay nadie con esa cedula
      }
    }).catch(err => callback(err,null)); // Error de la base de datos
  }
};

module.exports = AdministratorController;

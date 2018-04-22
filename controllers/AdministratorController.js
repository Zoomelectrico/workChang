const Replacement = require('../models/Replacement');
const User = require('../models/User');

const AdministratorController = {
  getAllReplacements: async function (callback) {
    try {
      let replacements = await Replacement.findAll();
      callback(null, replacements);
    } catch (e) {
      callback(e, null);
    }
  },
  insertReplacement: async function (replacement, callback) {
    try {
      let r = await Replacement.findOne({
        where: {
          partNumber: replacement.partNumber
        }
      });
      if (r) {
        callback(new Error('Ya existe un Repuesto con ese numero de parte'), null);
      } else {
        let rep = await Replacement.create(replacement);
        callback(null, rep);
      }
    } catch (e) {
      callback(e, null);
    }
  },
  searchReplacementByPartNumber: async function (partNumber, callback) {
    try {
      let r = await Replacement.findOne({
        where: {
          partNumber: partNumber
        }
      });
      if (r) {
        callback(null, r);
      } else {
        callback(new Error('No existe ningun repuesto registrado con ese numero de parte'), null);
      }
    } catch (e) {
      callback(e, null);
    }
  },
  modifyReplacement: async function (replacement, callback) {
    try {
      let r = await Replacement.findOne({
        where: {
          partNumber: replacement.partNumber
        }
      });
      if (r) {
        try {
          let rModify = await r.update({
            name: replacement.name,
            brand: replacement.brand,
            inStock: replacement.inStock,
            forModel: replacement.forModel
          });
          callback(null, rModify);
        } catch (e2) {
          callback(e2, null);
        }
      } else {
        callback(new Error('No hay repuestos registrados con ese número de parte'), null);
      }
    } catch (e) {
      callback(e, null);
    }
  },
  changeRole: async function (nationalID, newRole, callback) {
    try {
      let users = await User.findAll({
        where: {
          nationalID: nationalID
        }
      });
      if (users) {
        users.forEach(async (user) => {
          if (user.type !== 1) {
            try {
              let u = await user.update({ // Cambia el tipo de cuenta
                type: newRole
              });
              callback(null, u);
            } catch (e2) {
              callback(e2, null);
            }
          }
        });
      } else {
        callback(new Error('No hay usuarios registrados con esa Cédula de Identidad'), null);
      }
    } catch (e) {
      callback(e, null);
    }
  }
};

module.exports = AdministratorController;
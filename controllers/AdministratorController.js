const Administrator = require('../models/Administrator');

const AdministratorController = {
  register: function (userID, callback) {
    Administrator.create({
      User: UserID
    }).then(() => {
      Administrator.findOne({
        where: {
          User: UserID
        }
      }).then(administrator => callback(null, administrator))
      .catch(err => callback(err, null));
    });
  }
};

module.exports = AdministratorController;

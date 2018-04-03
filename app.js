// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const Sequelize = require('sequelize');
const dbconfig = require('./config/database');

// Sequelize Configuration
const sequelize = dbconfig;
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
// App Creation
const app = express();
const users = require('./routes/users');
const reports = require('./routes/reports');
const client = require('./routes/clients'); 
const admin = require('./routes/admin');
const manager = require('./routes/manager');
const qr = require('./routes/qr');
const email = require('./routes/email');
const mechanic = require('./routes/mechanics');

const port = 3000;

//set static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
})

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '65mb' }));
app.use(bodyParser.urlencoded({ limit: '65mb', extended: true }));

//Router
app.use('/User', users);
app.use('/Client', client);
app.use('/Admin', admin);
app.use('/Mechanic', mechanic);
app.use('/Manager', manager);
app.use('/Reports', reports);
app.use('/qr', qr);
app.use('/Email',email);

// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// App Running
app.listen(port, function (req, res) {
	console.log('Running');
});
const path = require('path');
const helmet=require('helmet');
const morgan=require('morgan');
const compression=require('compression');
const express = require('express');
var cors = require('cors')
const sequelize = require('./database');
const User = require('./models/user');
const Expense = require('./models/expense');

const userRoutes = require('./user')

const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));

app.use(cors());

app.use(express.json());  

app.use('/user', userRoutes)

User.hasMany(Expense);
Expense.belongsTo(User);


sequelize.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
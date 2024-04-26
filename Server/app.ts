const express = require('express');
import * as bodyParser from 'body-parser';
import router from './routes/LoginRoutes';
import expenseRouter from './routes/ExpenseRoutes';
import incomeRouter from './routes/IncomeRoutes';
import mongoose from 'mongoose';
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/ExpenseManagerDatabase')
.then(()=>{
    console.log('connected succesfully');
})
.catch((err)=>{
    console.log("error occured:"+err);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);
app.use(expenseRouter);
app.use(incomeRouter);

export default app;
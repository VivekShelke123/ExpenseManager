const express = require('express');
import ExpenseDetailController from "../controllers/ExpenseDetailController";

const expenseRouter = express.Router();

expenseRouter.post('/addExpense',ExpenseDetailController.addExpenseDetail);

expenseRouter.get('/getExpense/:userName',ExpenseDetailController.getExpenseDetails)

expenseRouter.put('/updateExpense/:userName',ExpenseDetailController.updateAmount);

expenseRouter.delete('/deleteExpense/:_id',ExpenseDetailController.deleteEntry);

export default expenseRouter;
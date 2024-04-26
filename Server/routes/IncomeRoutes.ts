const express = require('express');
import IncomeDetailController from "../controllers/IncomeDetailsController";

const incomeRouter = express.Router();

incomeRouter.post('/addIncome',IncomeDetailController.addIncomeDetail);

incomeRouter.get('/getIncome/:userName',IncomeDetailController.getIncomeDetails);

incomeRouter.put('/updateIncome/:userName',IncomeDetailController.updateAmount);

incomeRouter.delete('/deleteIncome/:_id',IncomeDetailController.deleteEntry);

export default incomeRouter;
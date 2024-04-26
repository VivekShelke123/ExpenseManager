import LoginController from "../controllers/LoginController";
const express = require('express');
 
const router = express.Router();

router.post('/Register', LoginController.addUser);

router.post('/Login',LoginController.getUser);

router.put('/Update',LoginController.updateUser);

router.put('/UpdatePass',LoginController.updatePass);

router.get('/getCurr/:userName',LoginController.getCurr);

router.put('/updateCurr/:userName',LoginController.updateCurr);

export default router;
const express = require('express');
const userController = require('./../controller/userController')
const router = express.Router();

router
    .route('/')
    .get(userController.getALLUsers)
    .post(userController.createUser);   
    
router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;    
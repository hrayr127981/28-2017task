const express = require ('express');
const UserRouter = express.Router();
const UserService = require('./Service');
UserRouter.get('/', (req,res)=>{
    let userGet = UserService.getUsers();
    return res.send(userGet);
});
UserRouter.get('/miban', (req,res)=>{
    return res.send('mi ban');
});

module.exports = UserRouter;
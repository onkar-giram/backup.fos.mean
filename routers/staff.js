const express = require('express')
const router = express.Router()
const StaffMaster = require('../models/staff')

router.get('/:username/:password', async(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    try{
        const staff = await StaffMaster.findOne( {username: username, password : password})  
        res.send(staff)
    }catch(err){
        res.send('ERROR: ' + err)
    }
})

router.post('/', async(req,res) => {
    
    try{
        
    }catch(err){
        res.send('ERROR: ' + err)
    }
})

module.exports = router
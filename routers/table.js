const express = require('express')
const router = express.Router()
const Table = require('../models/table')

// Adding a new table
router.get('/:table_no', async(req, res) => {

    const table_no = req.params.table_no;
    req.session.table_no = req.params.table_no;
    try{
        const savedTable = await Table.findOne({table_no : table_no});
        if(savedTable!= null){
            res.send(savedTable)
        }else{
            const status = {
                status : 'table not found'
            }
            res.send(status)
        }
    }catch(err){
        res.send('Error '+err);
    }
});

//Changing status from vaccant to Occupied
router.get('/changeStatus/:table_no/:status', async(req, res) => {
    const table_no = req.params.table_no;
    const status = req.params.status;
    try{
        const tableStatusUpdated = await Table.updateOne({table_no : table_no} ,{$set: { status: status }});
        if(tableStatusUpdated.nModified == 1){
            const status = {
            status : 'Marked as Occupied'
            }
            res.send(status);
        }else{
            res.send(status ={
                "status" : "Already Occupied"
            })
        }
    }catch(err){
        res.send('Error '+err);
    }
});

// Adding a new table
router.post('/', async(req, res) => {

    const table = new Table({
        table_no : req.body.table_no,
        status : "vaccant"
    });

    try{
        const savedTable = await table.save();
        res.send('Table send successfully');
    }catch(err){
        res.send('Error '+err);
    }
});

module.exports = router
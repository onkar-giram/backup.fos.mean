const express = require('express')
const router = express.Router()
const OrderDetails = require('../models/orderDetails');
const Table = require('../models/table')

//fetch total occupied tables for admin orders
router.get('/', async(req,res) => {
    try{
        const customerOrder = await OrderDetails.distinct('table_no', { order_status: "ordered" } )
        res.send(customerOrder)
    }catch(err){
        res.send('Error: '+err)
    }
})

//fetch total delivered/completed order tables
router.get('/completedOrder', async(req,res) => {
    try{
        const completedOrderTables = await OrderDetails.distinct('table_no', { order_status: "delivered" } )
        res.send(completedOrderTables)
    }catch(err){
        res.send('Error: '+err)
    }
})

//fetch for specific table
router.get('/table/:table_no', async(req,res) => {
    table_no = parseInt(req.params.table_no);
    try{
        const customerOrder = await OrderDetails.find({ table_no : table_no, order_status: "ordered" } )
        .populate('item_id')
        res.send(customerOrder)
    }catch(err){
        res.send('Error: '+err)
    }
})

//fetch for specific table
router.get('/completed/:table_no', async(req,res) => {
    table_no = parseInt(req.params.table_no);
    try{
        const customerOrder = await OrderDetails.find({ table_no : table_no, order_status: "delivered" } )
        .populate('item_id')
        res.send(customerOrder)
    }catch(err){
        res.send('Error: '+err)
    }
})

//mark order as delivered
router.get('/markAsDelivered/:table_no', async(req,res) => {
    table_no = parseInt(req.params.table_no);
    try{
        const updatedAsDelivered = await OrderDetails.updateMany({order_status: 'ordered', table_no : table_no}, {$set:{order_status: "delivered"}});
        res.send(status = {
            "status" : "marked as updated"})
    }catch(err){
        res.send('Error: '+err)
    }
})

//mark order as delivered
router.get('/markAsCompleted/:table_no', async(req,res) => {
    table_no = parseInt(req.params.table_no);
    console.log(table_no)
    try{
        const updatedAsCompleted = await OrderDetails.deleteMany({table_no : table_no});
        const tableStatusUpdated = await Table.updateOne({table_no : table_no} ,{$set: { status: 'vaccant' }});
        console.log(updatedAsCompleted)
        res.send(tableStatusUpdated)
    }catch(err){
        res.send('Error: '+err)
    }
})


module.exports = router
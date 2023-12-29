const express = require('express')
const router = express.Router()
const OrderDetails = require('../models/orderDetails');

//fetch customer order
router.get('/myOrder/:table_no', async(req,res) => {
    const table_no = parseInt(req.params.table_no);
    try{
        const customerOrder = await OrderDetails.find({order_status : 'ordered', table_no : table_no})
        .populate('item_id');
        res.send(customerOrder)
    }catch(err){
        res.send('Error: '+err)
    }
})

//Place Order
router.post('/placeOrder', async(req,res) => {  
    const table_no = parseInt(req.body.table_no);
    try{
        const updated = await OrderDetails.updateMany({order_status: 'cart', table_no : table_no}, {$set:{order_status: "ordered"}});
        res.send(updated)
    }catch(err){
        res.send('Error: '+err)
    }
})

// update quantity
router.post('/update', async(req, res) => {

    const id = req.body.id;
    const quantity = req.body.quantity;
    try{
        await OrderDetails.updateOne({_id : id}, {"$set": {"item_quantity" : quantity}})
        res.send(status = {
            "status" : "updated"
        });
    }catch(err){
        res.send('Error: '+ err)
    }
});


// Adding a new Item to cart
router.get('/:table_no/:item_id', async(req, res) => {

    const table_no = req.params.table_no;
    const item_id = req.params.item_id;

    const order = new OrderDetails({
        table_no: table_no,
        item_id: item_id,
        item_quantity : 1,
        order_status: 'cart'
    });

    try{
        console.log(order)
        const savedOrder = await order.save();
        res.send(savedOrder);
    }catch(err){
        res.send('Error '+err);
    }
});

//fetch customer cart
router.get('/:table_no', async(req,res) => {
    const tableNo = req.params.table_no;
    try{
        const fetchedCart = await OrderDetails.find({order_status : 'cart', table_no : tableNo})
        .populate('item_id');
        res.send(fetchedCart);
    }catch(err){
        res.send('Error: '+err)
    }
})

//deleting an item from cart
router.delete('/:itemId', async(req,res)=> {
    const itemId = req.params.itemId;
    try{
        await OrderDetails.deleteOne({_id: itemId})
        res.send(status ={
            'status' : 'Item Deleted'
            });
    }catch(err){
        res.send('Error: '+err) 
    }
})

module.exports = router
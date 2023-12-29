const express = require('express')
const router = express.Router()
const Menu = require('../models/menu')

//Inserting a new menu item
router.post('/', async(req, res) => {
    const menu = new Menu({
        item_name : req.body.item_name,
        item_price: req.body.item_price,
        item_type: req.body.item_type,
        item_url: req.body.item_url,
        item_status: req.body.item_status
    });
    try{
        const insertMenu = await menu.save()
        res.send('Menu Item Inserted')
    }catch(err){
        res.send('Error ' + err)
    }
})

//fetching all menu items (for manage menu items page)
router.get('/', async(req,res) => {
    try{
        const fetchedMenu = await Menu.find({})
        res.send(fetchedMenu)
    }catch(err){
        res.send('Error '+ err)
    }
});

//fetching all menu items by type (for menu page)
router.get('/:type', async(req,res) => {
    const item_type = req.params.type;
    try{
        const fetchedMenu = await Menu.find({item_type : item_type})
        res.send(fetchedMenu)
    }catch(err){
        res.send('Error '+ err)
    }
});

//deleting an item from menu by item id
router.delete('/:item_id', async(req,res)=> {
    console.log(req.params.item_id)
    const item_id = req.params.item_id;
    try{
        const deletedPost = await Menu.deleteOne({_id: item_id})
        res.send(deletedPost);
    }catch(err){
        res.send('Error: '+err) 
    }
})

module.exports = router
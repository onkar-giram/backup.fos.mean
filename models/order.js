const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    customer_id:{
        type: String,
        required: true
    },
    table_no:{
        type: Number,
        required: true
    },
    order_status:{
        type: String,
        required: true,
        default: 'ordered'
    }
})

module.exports = mongoose.model('Order', OrderSchema)
const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    table_no:{
        type:Number,
        required:true
    },
    status:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('table', tableSchema)
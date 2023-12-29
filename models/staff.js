const mongoose = require('mongoose')

const staffMasterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mobile_no:{
        type: Number,
        required: true
    },
    email_id:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('StaffMaster', staffMasterSchema)
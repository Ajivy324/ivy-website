const mongoose = require('mongoose');


const ShirtSchema = new mongoose.Schema({
    Size: { type: String },
    Message: { type: String },
    Price: { type:String}
}, { timestamps: true });
module.exports = mongoose.model('shirtDB', ShirtSchema);
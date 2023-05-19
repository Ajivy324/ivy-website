const mongoose = require('mongoose');


const ShirtSchema = new mongoose.Schema({
    Size: { type: String },
    price: { type: String },
    descrip: { type:String}
}, { timestamps: true });
module.exports = mongoose.model('shirtDB', ShirtSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {
        itemID: {type: String, require: true},
        companyID: {type: String, require:true},
        category:{type:String, require: true},
        brand:{type:String, require: true},
        model:{type:String, require: true},
        sitingcapacity:{type:Number, require: false},
        color:{type:String, require: false},
        location:{type:String, require: true},
        rate:{type:Number, require: true},
        status:{type:Boolean, require: true},

    }

);
    module.exports = mongoose.model('Items',ItemSchema);
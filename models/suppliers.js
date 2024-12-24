const mongoose = require("mongoose");
const schema = mongoose.Schema;


const supplierSchema = new schema({
    name:String,
    surname:String,
    age:Number,
    email:{type:String, unique:true},
    isAdmin:{type:Boolean, default:false},
    supplyCategory:String,
    Image:String,
});


const Supplier = mongoose.model('User', supplierSchema);

module.exports=User
const mongoose = require("mongoose");
const { Schema } = mongoose;

const prodcutsSchema = new Schema({
    title: {type:String,required:true , unique :true}, // String is shorthand for {type: String}
    description: String,
    price : {type:Number , min :[0, 'wrong min price'],required : true},
    discountPercentage:{type:Number , min :[0, 'wrong min discount'],max :[50,"wrong max discount"]},
    rating : {type:Number , min :[0, 'wrong min rating'],max :[5,"wrong max rating"],default :0},
    brand : {type:String,required:true},
    category : {type:String,required:true},
    thumbnail : {type:String,required:true},
    images : [String],
  });
// 

// Model
exports.Product = mongoose.model('Product',prodcutsSchema);

const fs = require('fs');
const model = require("../models/product")
const Product = model.Product

exports.createProduct = async(req,res)=>{
    const product = new Product(req.body);
    await product.save()
    res.status(201).json(req.body)
}
exports.getAllproducts =async(req,res)=>{
    const products = await Product.find()
    res.json(products)
}

exports.getProduct = async(req,res)=>{
    const id = req.params.id
    const products = await Product.findById(id)
    res.json(products)
}
exports.updateDirect = async(req,res)=>{
    const id = req.params.id;
    try{
        const doc= await Product.findOneAndReplace({_id:id},req.body,{new:true})
        res.status(201).json(doc)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}
exports.updateSpecific = async(req,res)=>{
    const id = req.params.id;
    try{
        const doc= await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(doc)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}
exports.deleteProduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const doc= await Product.findOneAndDelete({_id:id})
        res.status(201).json(doc)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

const express = require('express')
const userController = require('../controller/product')


const router = express.Router()


router
.post('/',userController.createProduct)
.get('/',userController.getAllproducts)
.get('/:id',userController.getProduct)
.put('/:id',userController.updateDirect)
.patch("/:id",userController.updateSpecific)
.delete("/:id",userController.deleteProduct)

exports.router = router;
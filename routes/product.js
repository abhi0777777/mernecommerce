const express = require('express')
const productController = require('../controller/product')


const router = express.Router()


router
.post('/',productController.createProduct)
.get('/',productController.getAllproducts)
.get('/:id',productController.getProduct)
.put('/:id',productController.updateDirect)
.patch("/:id",productController.updateSpecific)
.delete("/:id",productController.deleteProduct)

exports.router = router;
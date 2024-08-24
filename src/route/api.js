const express = require("express");
const ProductController = require('../controller/ProductController')
const router =  express.Router();
//C = Create
router.post("/CreateProduct",ProductController.CreateProduct)
//R = Read
router.get("/ReadProduct",ProductController.ReadProduct)

//U = Update
router.put("/UpdateProduct/:id",ProductController.UpdateProduct)

//D= Delete
router.delete("/DeleteProduct/:id",ProductController.DeleteProduct)

module.exports = router
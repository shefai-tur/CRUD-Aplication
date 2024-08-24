const ProductsModel = require("../model/ProductsModel");

//C = Crate

exports.CreateProduct = async (req, res) => {
  try {
    const { ProductName, ProductCode, UnitPrice, Qty, TotalPrice } = req.body;
    const NewProduct = new ProductsModel({
      ProductName,
      ProductCode,
      UnitPrice,
      Qty,
      TotalPrice,
    });
    await NewProduct.save();
    res
      .status(200)
      .json({ succes: true, message: "New Produact add succses", NewProduct });
  } catch (error) {
    console.log(error);

    res.status(400).json({ succes: false, message: "Internal server Error" });
  }
};
//R = Read

exports.ReadProduct = async (req, res) => {
  try {
    const product = await ProductsModel.find();
    if (!product) {
      return res
        .status(404)
        .json({ succes: false, massage: "Product Not Found" });
    }
    res.status(200).json({ succes: true, product });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ succes: false, massage: "internal servar error" });
  }
};
//U = Update

exports.UpdateProduct = async (req, res) => {
  try {
    let Productid = req.params.id;
    const upProdauct = await ProductsModel.findByIdAndUpdate(
      Productid,
      req.body,
      { new: true }
    );
    if(!upProdauct){
        res.status(404).json({succes:false,massage:"Product Not Update"})
    }
    res.status(200).json({succes:true,upProdauct})
  } catch (error) {
    console.log(error);
    res.status(400).json({succes:false,massage:"Internal server Error"})
    
  }
};
//D = Delete

exports.DeleteProduct = async(req, res) => {
try {
    const PdId = req.params.id
 const deletedProduct = await ProductsModel.findByIdAndDelete(PdId)
 if(!deletedProduct){
    res.status(404).json({succes:false,massage:"Product id Not Found"})
 }
 res.status(200).json({succes:true,massage:"Delte sucsses"})
} catch (error) {
 console.log(error);
 res.status(400).json({succes:false,massage:"internal server eror"})
    
}

};

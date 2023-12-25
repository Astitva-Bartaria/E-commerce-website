const product = require('../Model/product');

async function getAllProducts(req,res){
    try {
        const allProd = await product.find({});
        res.status(200).json({
            message:"All products are here",
            allProD:allProd
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Sorry! There was an server-side error"
        })
    }
}

module.exports = getAllProducts;
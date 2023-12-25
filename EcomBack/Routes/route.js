const express = require('express');
const routes = express.Router();

//All Controllers for user
const userRegister = require('../Controllers/userRegister');
const userLogin = require('../Controllers/userLogin');
const fetchUserDetails = require('../Controllers/getUserDetails');
const editUser = require('../Controllers/editUserDetails');
const fetchAllUser = require('../Controllers/fetchAllUsers');
const deleteUser = require('../Controllers/deleteParticularUser');
const userQuery = require('../Controllers/contactUs');

//All Controller for product
const cloudUpload = require('../Controllers/imageUploader');
const getAllProducts = require('../Controllers/allProducts');
const specificProduct = require('../Controllers/specificProductFetch');
const catWiseProduct = require('../Controllers/categoryProductFetch');
const productById = require('../Controllers/specProductDetail');
const ratingPro = require('../Controllers/rateProduct');
const allOrders = require('../Controllers/allOrderPlaced');
const editProduct = require('../Controllers/editProductDetail');
const deleltedProduct = require('../Controllers/deleteProduct');

//Cart Controllers
const addToCart = require('../Controllers/addToCart');
const getCartDetails = require('../Controllers/getCartData');
const checkOut = require('../Controllers/checkOut');
const deleteCartItem = require('../Controllers/deleteCartItems');
const summaryCart = require('../Controllers/summary')
const decrementCart = require('../Controllers/decrement')


//Shipping Controllers
const shippingAdd = require('../Controllers/addShipping');
const getAllAddress = require('../Controllers/fetchAllShipping');

//Search Logic (Improvement Required)
const searchProduct = require('../Controllers/searchProduct');

//MiddleWares if any
const loginCheck = require('../middleware/isLoggedIn');
const adminCheck = require('../middleware/isAdmin');

//Routes defined here
routes.post('/register', userRegister);
routes.post('/login', userLogin);
routes.get('/userDetail/:userId', loginCheck, fetchUserDetails);
routes.post('/editDetail/:userId', loginCheck, editUser);
routes.get('/allUsers', loginCheck, adminCheck, fetchAllUser);
routes.delete('/delete/:userId', loginCheck, adminCheck, deleteUser);
routes.post('/addProduct', loginCheck, adminCheck, cloudUpload);
routes.get('/allProduct', getAllProducts);
routes.get('/product/:productType', specificProduct);
routes.get('/catProduct/:catType', catWiseProduct);
routes.get('/productDetails/:productId', productById);
routes.post('/rateProduct/:productId/:userId', loginCheck, ratingPro);
routes.post('/contactUs/:userId', loginCheck, userQuery);
routes.get('/addCart/:userId/:proId', loginCheck, addToCart);
routes.get('/cartDetail/:userId', loginCheck, getCartDetails);
routes.post('/addShipping/:userId', loginCheck, shippingAdd);
routes.get('/allShipping/:userId', loginCheck, getAllAddress);
routes.get('/checkout/:userId', loginCheck, checkOut);
routes.get('/orders/:userId', loginCheck, allOrders);
routes.get('/search/:searchQ', searchProduct);
routes.delete('/deletecart/:userId/:cartId', loginCheck, deleteCartItem);
routes.post('/edit/:productId', loginCheck, adminCheck, editProduct);
routes.delete('/d/:productId', loginCheck, adminCheck, deleltedProduct);
routes.get('/summary/:userId', loginCheck, summaryCart);
routes.delete('/dec/:userId/:cartId', loginCheck, decrementCart, deleteCartItem);

//Exported Router
module.exports = routes;
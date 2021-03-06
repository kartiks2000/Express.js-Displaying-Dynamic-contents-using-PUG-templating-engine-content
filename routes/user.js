
const express = require('express');
const path = require('path');

const router = express.Router();

const backprops = require('./back');


router.use('/products',(req,res,next)=>{
    // console.log(backprops.allproducts);

    // We render .pug file using "res.render()" and we eneter the name of pug file inside it without ".pug" extention
    // To dynamically send data to the template we need to send a second argument as a dictionary to "res.render()" and the we could use the vairiables by the keys specified in the dictionary in the template as -: #{ key of dictionary goes here } 
    res.render('products',{ "allproducts":backprops.allproducts , "title":"Our Products..."});
});

router.use("/addproduct",(req,res,next)=>{
    // We render .pug file using "res.render()" and we eneter the name of pug file inside it without ".pug" extention
    res.render('addproduct');
});

module.exports = {
    "router": router,
}
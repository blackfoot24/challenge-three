var express = require('express');

var Product = require('../models/product');

var router = express.Router();

router.use(function(req, res, next){
  console.log('something is happeneing!');
  next();
});


router.route('/products')
  .get(function(req, res){
    Product.find(function(err, products){
      if(err){
        return next(err);
      } else {
        res.json(products)
      }
    })
  })
  .post(function(req, res){

    var product = new Product();
    product.name = req.body.name;
    product.inStock = req.body.inStock;
    product.cost = req.body.cost;

    product.save(function(err, product){
      if(err){
        res.send(err)
      } else {
        res.json(product)
      }
    })
  });


module.exports = router;
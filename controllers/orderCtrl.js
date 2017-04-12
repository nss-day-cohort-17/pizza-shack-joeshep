'use strict';

const Order = require('../models/order');
const { knex } = require('../db/database');
const Size = require('../models/size');
const Topping = require('../models/topping');

const getToppings = () => 
  Topping.forge().fetchAll()
  .then( (rows) => rows.toJSON() )
  .catch( (error) => {
    throw error
  });

const getSizes = () => 
  Size.forge().fetchAll()
  .then( (rows) => rows.toJSON())
  .catch( (error) => {
    throw error
  });

module.exports.show = (req, res, err) =>
  Promise.all([getToppings(), getSizes()])
  .then(([toppings, sizes]) => 
    res.render('order', {page: 'Order', sizes, toppings})
  ).catch(err)


module.exports.create = (req, res, err) => {
  // console.log("body", body);
  Order.forge(req.body)
    .save()
    .then( (orderObj) => {
      // Save a msg in a cookie whose value will be added to req
      req.flash('orderMsg', 'Thanks for your order!');
      res.redirect('/');
    })
    .catch( (err) => {
      console.log("errors!", err);
      Promise.all([
        Promise.resolve(err),
        getSizes(),
        getToppings()
      ])
      .then(([errors, sizes, toppings]) => 
        res.render('order', { page: 'Order', sizes, toppings, errors, body})
      )
    })
    .catch(err)
}









var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only'
  })
];

var ProductSchema = new mongoose.Schema({
	name: {type: String, required: true, validate: nameValidator},
	amount: Number,
	bidder: String,
	date: { type: Date, default: Date.now }, 
});

mongoose.model("Product", ProductSchema);
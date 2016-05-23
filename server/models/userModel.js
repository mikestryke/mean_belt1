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

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, validate: nameValidator},
	date: { type: Date, default: Date.now }, 
	topics: [{ type: mongoose.Schema.Types.Mixed, ref: "Topic" }],
	posts: [{ type: mongoose.Schema.Types.Mixed, ref: "Post" }],
	comments: [{ type: mongoose.Schema.Types.Mixed, ref: "Comment" }]
});

mongoose.model("User", UserSchema);
//Validation


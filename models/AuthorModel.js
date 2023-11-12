const mongoose = require("mongoose");

const {Schema} = mongoose

const AuthorModel = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date, required: true },
  email: { type: String, required: true, maxLength: 100 },
  username: { type: String, required: true, maxLength: 15 },
  password: { type: String, required: true, maxLength: 15, minLength: 8 },
});

module.exports = mongoose.model("Author", AuthorModel)

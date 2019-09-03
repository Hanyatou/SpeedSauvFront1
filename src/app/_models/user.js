const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,  
    required: true,
   },

 loginId: {
  type: String,
  trim: true,  
  required: true,
  },

  firstNameUser: {
    type: String,
    trim: true,  
    required: true,
   },

  lastNameUser: {
    type: String,
    trim: true,  
    required: true,
   },

  numSecu: {
    type: Number,
    trim: true,  
    required: true,
   },
  password: {
  type: String,
  trim: true,
  required: true
 }
});
// hash user password  and num sécu before saving into database
UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
this.numSecu = bcrypt.hashSync(this.numSecu, saltRounds);
next();
});
module.exports = mongoose.model('User', UserSchema);
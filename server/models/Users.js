const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  rollNo: { type: String, required: true },
  password: { type: String, required: true },
  books: [{
    title: String,
    issueDate: Date,
    returnDate: Date,
  }], 
  about: { type: String }, // Add about field
  photo: { type: String } 
});

UserSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  return await bcrypt.compare(password, user.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;

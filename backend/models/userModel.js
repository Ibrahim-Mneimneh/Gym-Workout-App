//validation package
const validator = require("validator");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");
const userSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//static signup method
userSchema.statics.signup = async function (name, age, email, password) {
  if (!email || !password || !name || !age) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid Email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password should at least be 8 characters with a number, a special character, an uppercase and a lowercase character"
    );
  } else {
    const exists = await this.findOne({ email });

    if (exists) {
      throw Error("Email already in use.");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({ name, age, email, password: hash });
    return user;
  }
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};
module.exports = mongoose.model("User", userSchema);

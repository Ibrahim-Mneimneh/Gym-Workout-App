const User = require("../models/userModel");

// jwt package
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, {
    expiresIn: "1d",
  });
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    //create token
    const token = createToken(user._id);

    res.status(200).json({ name: user.name, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { name, age, email, password } = req.body;
  try {
    const user = await User.signup(name, age, email, password);
    //create token
    const token = createToken(user._id);

    res.status(200).json({ name, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  loginUser,
  signupUser,
};

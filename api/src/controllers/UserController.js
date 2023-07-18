const User = require('../models/User');



async function login(req, res) {
  const { email, password } = req.body;
  try {
    // Find the user with the provided email
    const user = await User.findOne({ where: { email } });

    // Check if the user exists and the password matches
    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Store relevant data in the session
    req.session.userId = user.id;
    req.session.email = user.email;

    // Perform additional actions if login is successful
    // For example, you can generate a token and send it in the response
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error });
  }
}

async function register(req, res) {
  const { username, email, password, confirmPassword } = req.body;

  // return res.status(400).json({ error: username });

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    // Check if user already exists
    // const existingUser = await User.findOne({ username });

    // if (existingUser) {
    //   return res.status(400).json({ error: 'User already exists' });
    // }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    // Return success response
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    // Handle any errors that occur during registration
    res.status(500).json({ error: "An error occurred during registration" });
  }
}


module.exports = {
  login,
  register,
};

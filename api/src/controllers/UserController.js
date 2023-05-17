const User = require('../models/User');




async function login(req, res) {
  const { username, password } = req.body;

  res.send(username,password);return;

  try {
    // Find the user with the provided username
    const user = await User.findOne({ where: { username } });

    // Check if the user exists and the password matches
    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Perform additional actions if login is successful
    // For example, you can generate a token and send it in the response

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  login,
};

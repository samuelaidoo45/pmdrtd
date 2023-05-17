// middleware/validationMiddleware.js

function validateLoginRequest(req, res, next) {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
  
    next();
  }
  
  module.exports = {
    validateLoginRequest,
  };
  
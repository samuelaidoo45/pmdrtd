// authMiddleware.js

// Example authentication middleware
const authMiddleware = (req, res, next) => {
    // Check if the user is authenticated
  
    if (req.session.userId) {
      // User is authenticated, proceed to the next middleware or route handler
      next();
    } else {
      // User is not authenticated, send an error response
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  module.exports = authMiddleware;
  
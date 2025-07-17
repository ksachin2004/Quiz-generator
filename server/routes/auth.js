const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Signup Route
router.post(
  '/register',
  [
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Fallback: check for missing/empty fields after trimming
    const { username, email, password } = req.body;
    if (!username || !email || !password || !username.trim() || !email.trim() || !password.trim()) {
      return res.status(400).json({ message: 'All fields are required and cannot be empty.' });
    }
    try {
      let user = await User.findOne({ $or: [ { username }, { email } ] });
      if (user) {
        return res.status(400).json({ message: 'User with that username or email already exists' });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user = new User({ username, email, password: hashedPassword });
      await user.save();
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
      );
      res.status(201).json({ token, user: { username: user.username, email: user.email } });
    } catch (err) {
      next(err);
    }
  }
);

// Login Route
router.post(
  '/login',
  [
    body('identifier').notEmpty().withMessage('Username or Email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { identifier, password } = req.body;
    try {
      const user = await User.findOne({
        $or: [
          { username: identifier },
          { email: identifier }
        ]
      });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
      );
      res.status(200).json({ token, user: { username: user.username, email: user.email } });
    } catch (err) {
      next(err);
    }
  }
);

router.get('/me', authMiddleware, async (req, res, next) => {
  try {
    // req.user is set by auth middleware
    const user = await User.findById(req.user.userId).select('username');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ username: user.username });
  } catch (err) {
    next(err);
  }
});

module.exports = router; 
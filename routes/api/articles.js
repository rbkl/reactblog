const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// @route   GET api/articles/test
// @desc    Test articles route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Articles works"}));



// @route   GET api/articles/test
// @desc    Test articles route
// @access  Public
router.get('/', (req, res) => res.json({msg: "Root directory works"}));


module.exports = router;

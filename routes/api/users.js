const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  "/",
  [
    //Validate the name
    check("name", "Name is required")
      .not()
      .isEmpty(),
    //Validate the email
    check("email", "Please include a valid email").isEmail(),
    //Validate password min length of 5
    check(
      "password",
      "Please enter a password with 5 or more characters"
    ).isLength({ min: 5 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check if user exists

      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      // Get users gravatar// Not implementing this bit
      // Create a new User
      user = new User({
        name,
        email,
        password
      });

      // Encrypt password with Bcrypt

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      // Save the user to the database
      await user.save();

      // Return jsonwebtoken

      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            throw err;
          }

          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;

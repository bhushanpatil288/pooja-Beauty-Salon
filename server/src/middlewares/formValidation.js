const { body } = require("express-validator");

const signupValidation = [
    body("phone")
        .isMobilePhone("en-IN")
        .withMessage("Enter valid phone number")
        .notEmpty()
        .withMessage("Phone number is required"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    body("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters long")
]

module.exports = { signupValidation }
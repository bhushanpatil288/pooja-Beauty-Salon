const bcrypt = require("bcrypt");

const hashPass = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

module.exports = { hashPass };
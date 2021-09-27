const db = require('../models');
const User = db.users;

const getUserDetails = async (req, res) => {
    try {
        let user = await User.findOne({ userName: req.session.username }).lean()
        return res.send(user);
    }
    catch (err) {
        res.status(400)
        return res.send("Database query failed")
    }
}

module.exports = {
    getUserDetails
}
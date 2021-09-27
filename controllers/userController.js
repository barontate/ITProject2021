const db = require('../models');
const User = db.users;

const getUserDetails = async (req, res) => {
    try {
        let user = await User.findOne({ userName: req.body.username }).lean()
        return res.render('<h1>Logged in!</h1>');
    }
    catch (err) {
        res.status(400)
        return res.send("Database query failed")
    }
}

module.exports = {
    getUserDetails
}
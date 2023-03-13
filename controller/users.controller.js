const { getDb } = require("../utilities/mongodb")

// Get all users
module.exports.getUsers = async (req, res, next) => {
    try {
        const db = getDb()
        const users = await db.collection("users").find().toArray()
        res.status(200).json(users)
    }
    catch (error) {
        next(error)
    }
}

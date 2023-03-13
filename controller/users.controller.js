const { getDb } = require("../utilities/mongodb")

// Get all users
module.exports.getUsers = async (req, res, next) => {
    try {
        const db = getDb()
        const users = await db.collection("users").find().toArray()
        res.status(200).json({ success: true, data: users })
    }
    catch (error) {
        next(error)
    }
}

// Create a new user
module.exports.postUser = async (req, res, next) => {
    try {
        const db = getDb()
        const user = await db.collection("users").insertOne(req.body)
        console.log(user);
        if (!user.insertedId) {
            return res.status(400).json({ success: false, data: `something is Wrong` })
        }
        res.status(200).json({ success: true, data: `user is created id : ${user.insertedId}` })
    }
    catch (error) {
        next(error)
    }
}

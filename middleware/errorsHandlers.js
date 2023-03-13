const errorHandler = (err, reg, res, next) => {
    console.log(err.name, err.message);
    res.send(err.message)
}
module.exports = errorHandler;
const notFoundMiddleware = (req, res) => {
    res.send('Route does not exist');
}

module.exports = notFoundMiddleware;
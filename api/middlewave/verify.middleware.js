const jwt = require("jsonwebtoken");
const config = require('config')

module.exports = verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, config.get('SECRET_KEY'), (err, token) => {
            if (err) {
                return res.status(201).json("Token is not valid!");
            }

            req.token = token;
            next();
        });

    } else {
        res.status(201).json("You are not authenticated!");
    }
};

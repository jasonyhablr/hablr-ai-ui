// utils/auth.js

import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer Token
    if (!token) {
        return res.status(401).json({ message: "Authentication token is required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add the user payload to the request
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};

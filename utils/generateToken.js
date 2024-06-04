// utils/generateToken.js

import jwt from 'jsonwebtoken';

// Function to generate a token
export const generateAuthToken = (user) => {
  // Expiry time can be set as per your requirement
  const expiresIn = '1h'; // Token expires in 1 hour

  // Create a token
  const token = jwt.sign(
    { id: user.id, email: user.email }, // This is the payload part of the token
    process.env.JWT_SECRET,            // Secret key for signing the token
    { expiresIn: expiresIn }
  );

  return token;
};

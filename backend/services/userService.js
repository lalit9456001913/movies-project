import jwt  from 'jsonwebtoken';
import bcrypt from "bcryptjs";

export const getSignedToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

export const matchPassword = async (enteredPassword, userPassword) => {
    console.log(enteredPassword,userPassword);
    return await bcrypt.compare(enteredPassword, userPassword);
};

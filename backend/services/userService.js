import jwt  from 'jsonwebtoken';

export const getSignedToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

export const matchPassword = async (enteredPassword, userPassword) => {
    return enteredPassword===userPassword;
};

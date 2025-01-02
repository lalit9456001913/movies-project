import User from '../models/user.js';
import { getSignedToken } from "../services/userService.js"

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        console.log(req.body);
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Please provide email and password',
            });
        }

        const user = await User.findOne({ email, password }).select('+password');
        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials',
            });
        }
        req.user = user;
        const token = getSignedToken(user);


        res.status(200).json({
            success: true,
            token,
            user: req.user,
        });

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({
            success: false,
            error: 'Server error, please try again later',
        });
        next(error);
    }
};
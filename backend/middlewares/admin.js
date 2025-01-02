import User from '../models/user.js';
import jwt  from 'jsonwebtoken';

const protectAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
         
        if (!token) {
            return res.status(401).json({
                success: false,
                error: 'Not authenticated!'
            });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });
        if(user.role!=='admin'){
            return res.status(401).json({
                success: false,
                error: 'Not authorized'
            });
        }
        req.user=user;
        next();
    } catch (error) {
        console.log("error", error)
        res.status(401).json({
            success: false,
            error: 'Not authorized'
        });
    }
};

export default protectAdmin;
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
  let token = req.header('Authorization')?.replace('Bearer ', '')
  const refreshToken = req.cookies?.refreshToken

  if (!token) {
    return res.status(401).json({ message: 'Access Denied, No Token Provided' })
  }

  try
    {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id)
        next()
    }
    catch (err)
    {
        if (err.name === 'TokenExpiredError' && refreshToken)
        {
            try
            {
                const decodedRefresh = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
                const user = await User.findById(decodedRefresh.id);
                if (!user) return res.status(401).json({ message: 'Invalid refresh token' });

                const newAccessToken = User.generateAuthToken()
                res.setHeader('Authorization', `Bearer ${newAccessToken}`)

                req.user = user
                next()
            }
            catch(refreshErr)
            {
                return res.status(401).json({ message: 'Invalid or expired refresh token' });
            }
        }
            else res.status(401).json({ message: 'Invalid or expired token' })
    }
}

module.exports = auth
import jwt from 'jsonwebtoken';

const cookieJwtAuth = async (req, res, next) => {
  const token = req.cookies.token || req.headers['x-access-token'] || req.headers.authorization; //depends on the implementation
  if (!token) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.clearCookie('token');
    return res.sendStatus(401);
  }
};

export default cookieJwtAuth;
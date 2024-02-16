import User from "#src/models/Users";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const exposeServices = {

  authLogin: async ({ email, password }) => {
    try {
      const findUser = await User.findOne({ email })
      return findUser
    } catch (error) {
      throw new Error(error)
    }
  },

  comparePassword: async ({ password, storedPassword }) => {
    const result = await bcrypt.compare(password, storedPassword);
    return result
  },

  generateToken: async (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
  },
}

export default exposeServices
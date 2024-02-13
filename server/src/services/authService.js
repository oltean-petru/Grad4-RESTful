import User from "#src/models/Users";
import bcrypt from 'bcrypt';


const exposeServices = {

authLogin: async (rawData) => { 
    const { email, password } = rawData
    const user = await User.findOne({ email })
    if (!user) {
      throw new Error('User not found')
    }
    const hash = await bcrypt.hash(password, user.salt)
    if (hash !== user.password) {
      throw new Error('Bad password')
    }
    return user
  }
}

export default exposeServices
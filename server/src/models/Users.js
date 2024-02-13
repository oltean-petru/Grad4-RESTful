import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    lastName : String , 
    firstName: String,
    email: { type:String,  required:'un nom est obligatoire:)' },
    password: { type:String, required:'un mot de passe est obligatoire:)' },
    salt: String,
    creationDate: { type: Date, default: Date.now },
    roles: { type: Array}
});

const userModel = mongoose.model('users',userSchema)

export default userModel
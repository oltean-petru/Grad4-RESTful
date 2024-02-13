import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    lastName: String,
    firstName: String,
    email: { type: String, required: 'un nom est obligatoire:)' },
    password: { type: String, minLength: 3, maxLength: 20 },
    salt: String,
    roles: [Schema.Types.ObjectId]
},
    { timestamps: true }
);

const userModel = mongoose.model('users', userSchema)

export default userModel
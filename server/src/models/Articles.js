import mongoose from "mongoose";
const { Schema } = mongoose;

const articleSchema = new Schema({
    imgUri: String,
    prompt: String,
    categories: Array,
    comments: { type: Schema.Types.Mixed },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    aiEngine: String,
},
    { timestamps: true }
);

const articleModel = mongoose.model('articles', articleSchema)

export default articleModel
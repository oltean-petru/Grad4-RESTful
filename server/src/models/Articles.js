import mongoose from "mongoose";
const { Schema } = mongoose;

const articleSchema = new Schema({
    imgUri: String,
    prompt: String,
    categories: [Schema.Types.Mixed],
    comments: [Schema.Types.Mixed],
    user: Schema.Types.Mixed,
    aiEngine: String,
},
    { timestamps: true }
);

const articleModel = mongoose.model('articles', articleSchema)

export default articleModel
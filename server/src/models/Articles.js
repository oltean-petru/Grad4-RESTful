import mongoose from "mongoose";
const { Schema } = mongoose;

const articleSchema = new Schema({
    imgUri: String,
    prompt: String,
    categories: { type: Array },
    comments : { type: Array, },
    user : { type: Schema.Types.ObjectId, ref: 'users' },
    publicationDate : { type: Date, default: Date.now },
    aiEngine: { type: Number, default: 0 },
});

const articleModel = mongoose.model('articles',articleSchema)

export default articleModel
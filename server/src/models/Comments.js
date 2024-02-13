import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema({
  comment: { type: String, required: "un contenu est obligatoire" },
  articleRef: { type: Schema.Types.ObjectId, ref: "articles" },
  user: { type: Schema.Types.ObjectId, ref: "users" },
  creationDate: { type: Date, default: Date.now },
  accepted: { type: Boolean, default: false },
  tonality: { type: String},
});

const commentModel = mongoose.model("comments", commentSchema);

export default commentModel;
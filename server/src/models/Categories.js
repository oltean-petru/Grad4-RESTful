import mongoose from "mongoose";
import { Schema } from "mongoose";

const categorySchema = new Schema({
  label: { type: String, required: "un label est obligatoire" },
});

const categoryModel = mongoose.model("categories", categorySchema);

export default categoryModel;
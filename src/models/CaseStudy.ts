import mongoose from "mongoose";

const CaseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: String,
  description: String,
  image: String,
  link: { type: String, unique: true },
  live: { type: Boolean, default: false },
});

export default mongoose.models.CaseStudy ||
  mongoose.model("CaseStudy", CaseStudySchema);

import mongoose, { Schema, models } from "mongoose";

const ChapterSchema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

const NovelSchema = new Schema(
  {
    title: { type: String, required: true },
    genre: { type: String },
    background: { type: String },
    character: { type: String },
    length: { type: Number, required: true },
    chapters: [ChapterSchema],
  },
  { timestamps: true }
);

export const Novel = models.Novel || mongoose.model("Novel", NovelSchema);

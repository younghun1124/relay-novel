// models/Novel.js (소설 모델 정의)
import mongoose from 'mongoose';

const NovelSchema = new mongoose.Schema({
  title: String,
  content: String,
  genre: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});

const Novel = mongoose.models.Novel || mongoose.model('Novel', NovelSchema);
export default Novel;

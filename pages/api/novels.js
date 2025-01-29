// pages/api/novels.js (소설 데이터 API)
import connectToDatabase from '../../db';
import Novel from '../../models/Novel';

export default async function handler(req, res) {
  await connectToDatabase(); // DB 연결

  if (req.method === 'POST') {
    const { title, content, genre, author } = req.body;

    const newNovel = new Novel({ title, content, genre, author });
    await newNovel.save(); // MongoDB에 저장

    return res.status(200).json({ message: '소설이 저장되었습니다.' });
  }

  if (req.method === 'GET') {
    const novels = await Novel.find(); // MongoDB에서 데이터 가져오기
    return res.status(200).json(novels);
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}

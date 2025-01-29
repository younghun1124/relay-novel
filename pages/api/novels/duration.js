// 페이지: /api/novels/duration

let novelDuration = {}; // 소설 분량을 저장할 객체 (임시)

export default function handler(req, res) {
  if (req.method === 'POST') {
    // 소설 분량 저장
    const { duration } = req.body;
    
    // 데이터 저장
    novelDuration = { duration };
    
    return res.status(200).json({ message: '소설 분량이 저장되었습니다.' });
  }

  if (req.method === 'GET') {
    // 저장된 소설 분량 불러오기
    return res.status(200).json(novelDuration);
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}

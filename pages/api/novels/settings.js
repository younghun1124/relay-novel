// 페이지: /api/novels/settings

let novelSettings = {}; // 소설 설정을 저장할 객체 (임시)

export default function handler(req, res) {
  if (req.method === 'POST') {
    // 소설 설정 저장
    const { genre, setting, era, character } = req.body;
    
    // 데이터 저장
    novelSettings = { genre, setting, era, character };
    
    return res.status(200).json({ message: '소설 설정이 저장되었습니다.' });
  }

  if (req.method === 'GET') {
    // 저장된 소설 설정 불러오기
    return res.status(200).json(novelSettings);
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}

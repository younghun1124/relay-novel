// 페이지: /api/novels/[bookid].js

let novels = {}; // 소설 내용을 저장할 객체 (임시)

export default function handler(req, res) {
  const { bookid } = req.query;

  if (req.method === 'POST') {
    // 소설 내용 저장
    const { content } = req.body;
    
    if (!novels[bookid]) {
      novels[bookid] = []; // 해당 bookid에 대한 내용 배열 생성
    }
    
    novels[bookid].push(content); // 내용 추가
    
    return res.status(200).json({ message: '내용이 저장되었습니다.' });
  }

  if (req.method === 'GET') {
    // 소설 내용 불러오기
    const content = novels[bookid] || [];
    return res.status(200).json({ content });
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}

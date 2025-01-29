// 페이지: /api/novels/relay/[bookid].js

let relayMessages = {}; // 전달된 메시지를 저장할 객체 (임시)

export default function handler(req, res) {
  const { bookid } = req.query;

  if (req.method === 'POST') {
    // 메시지 저장
    const { message } = req.body;
    
    relayMessages[bookid] = message; // 메시지 저장
    
    return res.status(200).json({ message: '메시지가 저장되었습니다.' });
  }

  if (req.method === 'GET') {
    // 저장된 메시지 불러오기
    const message = relayMessages[bookid] || '';
    return res.status(200).json({ message });
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}

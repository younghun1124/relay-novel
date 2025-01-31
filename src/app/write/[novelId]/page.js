import { Container, Stack, Paper, Title, Text, Badge, Group } from '@mantine/core';
import WriteForm from './WriteForm';

// 서버 컴포넌트로 변경
async function getNovel(novelId) {
  // 환경변수로 API URL 설정
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const response = await fetch(`${apiUrl}/api/novels/${novelId}`, {
    // SSR을 위한 fetch 옵션 추가
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!response.ok) {
    throw new Error('소설을 불러오는데 실패했습니다');
  }
  
  return response.json();
}

export default async function WritePage({ params }) {
  const novel = await getNovel(params.novelId);
  
  // chapters 배열에서 content만 추출
  const contents = novel.chapters?.map(chapter => chapter.content) || [];
  const remainingRelays = novel.length - (novel.chapters?.length || 0);
  
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Stack gap="md">
            <Title order={2}>{novel.title}</Title>
            <Group gap="sm">
              <Badge color="blue">{novel.genre}</Badge>
              <Text size="sm" c="dimmed">배경: {novel.background}</Text>
              <Text size="sm" c="dimmed">주인공: {novel.character}</Text>
            </Group>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Stack gap="md">
            <Title order={3}>이전 내용</Title>
            <Text style={{ whiteSpace: 'pre-line' }}>
              {contents.length > 0 ? contents.join('\n\n') : '아직 작성된 내용이 없습니다.'}
            </Text>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Stack gap="md">
            <Group justify="space-between" align="center">
              <Title order={3}>이어질 내용을 써주세요</Title>
              <Text size="sm" c="dimmed">
                완성까지 남은 릴레이: {remainingRelays}
              </Text>
            </Group>
            
            <WriteForm novelId={params.novelId} />
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}

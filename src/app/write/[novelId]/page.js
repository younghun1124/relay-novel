import { Container, Stack, Paper, Title, Text, Textarea, Button, Group } from '@mantine/core';
import WriteForm from './WriteForm';
import { use } from 'react';

// 서버 컴포넌트로 변경
async function getNovel(novelId) {
  const response = await fetch(`http://localhost:3000/api/novels/${novelId}`);
  
  if (!response.ok) {
    throw new Error('소설을 불러오는데 실패했습니다');
  }
  
  return response.json();
}

export default function WritePage({ params }) {
  // React.use()로 params 처리
  const { novelId } = use(params);
  const novel = use(getNovel(novelId));
  
  // chapters 배열에서 content만 추출
  const contents = novel.chapters?.map(chapter => chapter.content) || [];
  const remainingRelays = novel.length - (novel.chapters?.length || 0);
  
  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
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
            
            <WriteForm novelId={novelId} />
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}

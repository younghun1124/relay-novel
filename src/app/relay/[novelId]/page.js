'use client';
import { Container, Stack, Paper, Title, Text, Textarea, Button, Group } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RelayPage({ params }) {
  const [message, setMessage] = useState('');
  const [novel, setNovel] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // 소설 정보 가져오기
    const fetchNovel = async () => {
      const response = await fetch(`/api/novels/${params.novelId}`);
      if (response.ok) {
        const data = await response.json();
        setNovel(data);
      }
    };

    // Kakao SDK 초기화
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }

    fetchNovel();
  }, [params.novelId]);

  // 가장 최근 작성된 내용 가져오기
  const lastContent = novel?.chapters?.[novel.chapters.length - 1]?.content || '';

  const handleShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'text',
      text: `릴레이 소설 이어쓰기에 참여해주세요!\n\n마지막 내용: ${lastContent.slice(0, 100)}${lastContent.length > 100 ? '...' : ''}`,
      link: {
        mobileWebUrl: `${window.location.origin}/write/${params.novelId}`,
        webUrl: `${window.location.origin}/write/${params.novelId}`,
      },
    });
  };

  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Stack gap="md">
            <Title order={3}>작성하신 내용</Title>
            <Text style={{ whiteSpace: 'pre-line' }}>
              {lastContent}
            </Text>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Stack gap="md">
            <Title order={3}>다음 작가에게 할 말</Title>
            <Textarea
              placeholder="다음 작가에게 전하고 싶은 말을 작성해주세요... (선택사항)"
              description="예: 주인공의 성격을 활발하게 표현해주세요!"
              minRows={5}
              autosize
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            />

            <Group justify="space-between" pt="md">
              <Button 
                color="blue"
                onClick={handleShare}
              >
                카카오톡으로 다음 작가에게 전달하기
              </Button>
            </Group>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="md" radius="md" withBorder>
          <Group gap="sm">
            <Text size="sm" c="dimmed">
              💡 다음 작가에게 전달하면 더 이상 수정할 수 없습니다.
            </Text>
          </Group>
        </Paper>
      </Stack>
    </Container>
  );
}

'use client';
import { Container, Stack, Paper, Title, Text, Textarea, Button, Group } from '@mantine/core';
import { useState } from 'react';
import Link from 'next/link';

export default function RelayPage() {
  const [message, setMessage] = useState('');
  
  // 방금 작성한 내용 (나중에 API로 받아올 예정)
  const writtenContent = `"근데 내가 할 수 있을까?"`;

  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Stack gap="md">
            <Title order={3}>작성하신 내용</Title>
            <Text style={{ whiteSpace: 'pre-line' }}>
              {writtenContent}
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
              <Link href="/write/bookid">
                <Button variant="outline">
                  돌아가기
                </Button>
              </Link>
              <Link href="/browse">
                <Button 
                  color="blue"
                  onClick={() => {
                    // TODO: 메시지 저장 및 릴레이 전달 처리
                    console.log('전달 메시지:', message);
                  }}
                >
                  다음 작가에게 전달하기
                </Button>
              </Link>
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

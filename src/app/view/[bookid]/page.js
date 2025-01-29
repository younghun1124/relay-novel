'use client';
import { Container, Stack, Paper, Title, Text, Textarea, Button, Group } from '@mantine/core';
import { useState } from 'react';
import Link from 'next/link';

export default function WritePage() {
  const [content, setContent] = useState('');
  
  // 이전 내용 (나중에 API로 받아올 예정)
  const previousContent = `은하수 저편에 떠 있는 작은 행성 '루미나'에서는 밤마다 하늘에 별이 쏟아졌다.
이곳에 사는 사람들은 별을 잡아 자신의 소원을 이루는 전통을 가지고 있었다.
소년 '카이'는 열네 번째 생일을 맞아 가족들과 함께 별잡이 언덕으로 갔다.
다른 아이들이 먼저 별을 잡고 환호성을 지르는 동안, 카이는 멀리 보이는 파란빛의 별에만 시선이 멈췄다.
"저 별은 아무도 못 잡아. 너무 높아." 옆에서 누군가 조언했지만, 카이는 마음속으로 결심했다. '저 별만이 나의 진짜 소원을 이뤄줄 거야.'`;

  const remainingRelays = 21;

  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Stack gap="md">
            <Title order={3}>루미나스타</Title>
            <Text style={{ whiteSpace: 'pre-line' }}>
              {previousContent}
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}

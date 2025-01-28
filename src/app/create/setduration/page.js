'use client';
import { Container, Stack, Title, Paper, Button, Group, Text } from '@mantine/core';
import { useState } from 'react';
import Link from 'next/link';

export default function SetDuration() {
  const [selected, setSelected] = useState('');

  const durations = [
    { 
      id: 'short',
      label: '단편',
      description: '완성하려면 30회 릴레이 필요',
    },
    {
      id: 'long',
      label: '장편',
      description: '완성하려면 100회 릴레이 필요',
    },
    {
      id: 'unlimited',
      label: '무제한',
      description: '무제한으로 릴레이 가능',
    },
  ];

  return (
    <Container size="sm" py="xl">
      <Paper shadow="sm" p="xl" radius="md">
        <Stack gap="lg">
          <Title order={2} ta="center">소설 분량 설정</Title>

          <Stack gap="md">
            {durations.map((duration) => (
              <Paper 
                key={duration.id}
                shadow="xs"
                p="md"
                withBorder
                style={{ 
                  cursor: 'pointer',
                  borderColor: selected === duration.id ? 'var(--mantine-color-blue-filled)' : undefined 
                }}
                onClick={() => setSelected(duration.id)}
              >
                <Group justify="space-between" wrap="nowrap">
                  <Stack gap="xs">
                    <Text fw={500}>{duration.label}</Text>
                    <Text size="sm" c="dimmed">{duration.description}</Text>
                  </Stack>
                  <Button 
                    variant={selected === duration.id ? "filled" : "outline"}
                    radius="xl"
                    size="compact-sm"
                  >
                    선택
                  </Button>
                </Group>
              </Paper>
            ))}
          </Stack>

          <Stack gap="md" pt="md">
            <Link href={selected ? '/write/bookid' : '#'} style={{ width: '100%' }}>
              <Button fullWidth disabled={!selected}>
                다음
              </Button>
            </Link>
            <Link href="/create/setting" style={{ width: '100%' }}>
              <Button fullWidth variant="outline">
                이전으로
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
}

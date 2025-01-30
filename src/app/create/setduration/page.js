'use client';
import { Container, Stack, Title, Paper, Button, Group, Text } from '@mantine/core';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SetDuration() {
  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const durations = [
    { 
      id: 'short',
      label: '단편',
      description: '완성하려면 30회 릴레이 필요',
      length: 30
    },
    {
      id: 'long',
      label: '장편',
      description: '완성하려면 100회 릴레이 필요',
      length: 100
    },
    {
      id: 'unlimited',
      label: '무제한',
      description: '무제한으로 릴레이 가능',
      length: 999999
    },
  ];

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      
      const selectedDuration = durations.find(d => d.id === selected);
      
      const response = await fetch('/api/novels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `${searchParams.get('character')}의 이야기`,
          genre: searchParams.get('genre'),
          background: searchParams.get('setting'),
          character: searchParams.get('character'),
          length: selectedDuration.length
        }),
      });

      if (!response.ok) {
        throw new Error('소설 생성에 실패했습니다');
      }

      const data = await response.json();
      router.push(`/write/${data.id}`);
      
    } catch (error) {
      console.error('Error:', error);
      alert('소설 생성 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

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
            <Button 
              fullWidth 
              disabled={!selected} 
              loading={isLoading}
              onClick={handleSubmit}
            >
              다음
            </Button>
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


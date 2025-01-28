import { Container, Stack, Title, Button } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  return (
    <Container size="md">
      <Stack align="center" justify="center" h="100vh" gap="xl">
        <Title order={1}>릴레이 소설</Title>
        <Stack gap="md" style={{ width: '100%', maxWidth: '200px' }}>
          <Link href="/create/setting" style={{ width: '100%' }}>
            <Button fullWidth>소설 생성하기</Button>
          </Link>
          <Link href="/browse" style={{ width: '100%' }}>
            <Button fullWidth variant="outline" color="green">
              소설 보러가기
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
} 
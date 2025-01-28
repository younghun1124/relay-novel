'use client';
import { Container, Stack, Title, Select, Button, Paper } from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';

export default function CreateSetting() {
  const form = useForm({
    initialValues: {
      genre: '',
      setting: '',
      era: '',
      character: '',
    },
  });

  const genres = ['판타지', '로맨스', 'SF', '추리', '호러'];
  const settings = ['학교', '회사', '왕궁', '우주', '시골'];
  const eras = ['현대', '중세', '미래', '고대', '15세기'];
  const characters = ['학생', '기사', '마법사', '다람쥐', '용'];

  const isFormComplete = Object.values(form.values).every(value => value !== '');

  return (
    <Container size="sm" py="xl">
      <Paper shadow="sm" p="xl" radius="md">
        <Stack gap="lg">
          <Title order={2} ta="center">소설 설정 선택</Title>
          
          <Select
            label="장르를 골라 주세요"
            placeholder="장르 선택"
            data={genres}
            {...form.getInputProps('genre')}
          />

          <Select
            label="배경을 골라 주세요"
            placeholder="배경 선택"
            data={settings}
            {...form.getInputProps('setting')}
          />

          <Select
            label="시대를 골라 주세요"
            placeholder="시대 선택"
            data={eras}
            {...form.getInputProps('era')}
          />

          <Select
            label="주인공을 골라 주세요"
            placeholder="주인공 선택"
            data={characters}
            {...form.getInputProps('character')}
          />

          <Stack gap="md">
            <Link href={isFormComplete ? '/create/setduration' : '#'} style={{ width: '100%' }}>
              <Button fullWidth disabled={!isFormComplete}>
                다음
              </Button>
            </Link>
            <Link href="/" style={{ width: '100%' }}>
              <Button fullWidth variant="outline">
                돌아가기
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
} 

import { Container, Stack, Paper, Title, Text, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import Link from 'next/link';
import classes from './NovelCardsGrid.module.css';

function ArticleCardImage({novel}) {
    return (
      <Paper shadow="md" p="xl" radius="md" className={classes.card}>
        <div>
          <Title order={3} className={classes.title}>
            {novel.title}
          </Title>
          <Text className={classes.category} size="xs">
            {novel.background} 
          </Text>
          <Text className={classes.category} size="xs">
            {novel.createdAt}
          </Text>
        </div>
        <Link href={`/view/${novel.id}`}>
            <Button variant="white" color="dark">
              보러가기
            </Button>
        </Link>
      </Paper>
    );
  }
export default function BookListViewPage() {
    const jsonData = `[
        {
          "id": "novel_001",
          "title": "시간의 틈새",
          "genre": "SF",
          "background": "근미래 서울, 불법 시간여행이 만연한 사회",
          "character": "강준혁",
          "length": 1200,
          "createdAt": "2025-01-30"
        },
        {
          "id": "novel_002",
          "title": "어둠 속의 서약",
          "genre": "판타지",
          "background": "마법과 음모가 뒤섞인 중세 왕국",
          "character": "엘라리스",
          "length": 980,
          "createdAt": "2025-01-28"
        },
        {
          "id": "novel_003",
          "title": "붉은 단심",
          "genre": "로맨스",
          "background": "조선 후기, 권력 다툼 속의 궁중 로맨스",
          "character": "이도현",
          "length": 1100,
          "createdAt": "2025-01-25"
        }
      ]`;
      
      
    const novels = JSON.parse(jsonData); // JSON → JavaScript 객체 변환
    console.log(novels)
    const cards=novels.map((novel)=> (<ArticleCardImage key={novel.id} novel={novel}/>))

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}


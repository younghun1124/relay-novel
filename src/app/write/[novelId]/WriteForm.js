'use client';
import { Textarea, Button, Group } from '@mantine/core';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WriteForm({ novelId }) {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/novels/${novelId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content.trim(),
          author:"익명"
        }),
      });

      if (!response.ok) {
        throw new Error('내용 저장에 실패했습니다');
      }

      const data = await response.json();
      
      // 성공 후 다음 작가에게 공유하기 페이지로 이동
      router.push(`/relay/${novelId}`);
      router.refresh();
      
    } catch (error) {
      console.error('Error:', error);
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Textarea
        placeholder="이어질 내용을 작성해주세요..."
        minRows={10}
        autosize
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />

      <Group justify="space-between" pt="md">
        <Button
          color="blue"
          disabled={!content.trim()}
          loading={isLoading}
          onClick={handleSubmit}
          style={{ marginLeft: 'auto' }}
        >
          완료
        </Button>
      </Group>
    </>
  );
} 
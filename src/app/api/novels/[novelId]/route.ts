import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import { Novel } from "../../../lib/models"

// NextRequest 타입 추가
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { novelId: string } }
) {
  await connectDB();
  try {
    const { novelId } = params;
    const novel = await Novel.findById(novelId);
    if (!novel) {
      return NextResponse.json({ error: "소설을 찾을 수 없습니다." }, { status: 404 });
    }
    return NextResponse.json(novel, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "소설 조회 오류" }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { novelId: string } }
) {
  await connectDB();
  try {
    const { novelId } = params;
    const { content, author } = await request.json();
    if (!content || !author) {
      return NextResponse.json({ error: "내용과 작성자는 필수 입력값입니다." }, { status: 400 });
    }

    const novel = await Novel.findById(novelId);
    if (!novel) {
      return NextResponse.json({ error: "소설을 찾을 수 없습니다." }, { status: 404 });
    }

    novel.chapters.push({ content, author });
    await novel.save();

    return NextResponse.json({ message: "내용이 추가되었습니다." }, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "이어쓰기 오류" }, { status: 500 });
  }
}

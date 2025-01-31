import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import { Novel } from "../../lib/models"

export async function POST(req: Request) {
  await connectDB();
  try {
    const { title, genre, background, character, length } = await req.json();
    if (!title || !length) {
      return NextResponse.json({ error: "제목과 길이는 필수 입력값입니다." }, { status: 400 });
    }
    
    const newNovel = await Novel.create({ title, genre, background, character, length, chapters: [] });
    return NextResponse.json({ id: newNovel._id }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  try {
    const novels = await Novel.find().sort({ createdAt: -1 });
    return NextResponse.json(novels, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "소설 목록을 불러오는 중 오류 발생" }, { status: 500 });
  }
}

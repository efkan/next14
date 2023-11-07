import { NextResponse } from "next/server";
import { v4 } from "uuid";
import posts from "./data.json";


export async function GET() {
  console.log('HIT to GET /api/posts');

  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  console.log('HIT to POST /api/posts');

  const body = await request.json();

  if (!body.title || !body.description) {
    return NextResponse.error()
  }

  posts.push({ id: v4(), ...body });

  return NextResponse.json(posts);
}
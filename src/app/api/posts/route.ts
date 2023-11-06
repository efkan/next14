import { NextResponse } from "next/server";
import { posts } from "./[id]/route";


export async function GET() {
  console.log('HIT to /api/posts');

  return NextResponse.json(posts);
}
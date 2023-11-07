import { NextResponse } from "next/server";
import users from "./data.json";


export async function GET() {
  console.log('HIT to /api/posts');

  return NextResponse.json(users);
}
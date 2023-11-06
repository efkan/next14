import { NextPageContext } from 'next';
import {NextResponse} from 'next/server';
import data from '@/products-data.json'

export async function GET() {
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log("POST - data:", data);

  return NextResponse.json({
    status: 201,
    data: data.name ? `${data.name} added.` : 'Added.',
  });
}

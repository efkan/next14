import { NextPageContext } from 'next';
import {NextResponse} from 'next/server';
import data from '@/products-data.json'

export async function GET() {
  const number = Math.floor(Math.random() * 1000 - 1)

  return NextResponse.json({
    number
  });
}

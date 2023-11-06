import { NextPageContext } from 'next';
import {NextResponse} from 'next/server';
import data from '@/products-data.json'

export async function GET(request: Request, context: any) {
  const {params} = context;
  const {productId} = params;
  console.log("GET - params:", params);

  const foundProduct = data.find(p => p.id === Number(productId))
  console.log("GET - foundProduct:", foundProduct);

  return NextResponse.json(foundProduct);
}

export async function PUT(request: Request, context: any) {
  const {params} = context;
  const {productId} = params;

  const data = await request.json();
  console.log(`PUT data has arrived for to update the product with ID ${productId}`);
  console.log("PUT - data:", data);

  return NextResponse.json({
    status: 201,
    data: 'Added.',
  });
}

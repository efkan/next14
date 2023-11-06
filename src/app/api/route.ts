import {NextResponse} from 'next/server';

export async function GET() {
  // NextResponse extends Response Web API to add some extra helper methods like cookies()
  return NextResponse.json({
    status: 200,
    data: 'Hello World',
  });

  // return Response.json({
  //   hello: 'world',
  // })
}


export async function POST(request: Request) {
  const data = await request.json();
  console.log("POST - data:", data);

  return NextResponse.json({
    status: 201,
    data: data.name ? `${data.name} added.` : 'Added.',
  });
}




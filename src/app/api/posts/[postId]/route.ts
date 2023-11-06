import {NextResponse} from 'next/server';

export const posts = [
  {
    id: 1,
    title: 'Hello World!',
    description: 'This is my first post'
  },
  {
    id: 2,
    title: 'Voila!',
    description: 'An amazing post'
  },
]

export async function GET(request: Request, context: any) {
  console.log('HIT to GET!!!');

  const {params} = context

  return NextResponse.json({
    post: posts.find(post => post.id === parseInt(params.postId))
  });
}
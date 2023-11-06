import {NextResponse} from 'next/server';
import posts from '../data.json'

export async function GET(request: Request, context: any) {
  console.log('HIT to GET!!!');

  const {params} = context

  return NextResponse.json({
    post: posts.find(post => post.id === parseInt(params.postId))
  });
}
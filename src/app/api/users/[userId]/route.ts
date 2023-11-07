import {NextResponse} from 'next/server';
import users from '../data.json'

export async function GET(request: Request, context: any) {
  console.log('HIT to GET!!!');

  const {params} = context

  return NextResponse.json({
    user: users.find(user => user.id === parseInt(params.userId))
  });
}
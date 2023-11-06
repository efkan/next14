'use client'

import Link from "next/link";
import { useRouter } from "next/navigation"

export default function Profile () {
  const router = useRouter()
  console.log("Profile - router:", router);


  return (
    <div>
      <h1>my list of profiles</h1>
      <div>
        <ul>
          <li><Link href='/profile/1'>Profile 1</Link></li>
          <li><Link href='/profile/2'>Profile 2</Link></li>
          <li onClick={() => router.push('/profile/3')}>Profile 3</li>
          <li><a href='/profile/4'>Profile 4</a></li>
          <li><Link href='https://www.google.com'>Google</Link></li>
          <li>
            <Link href={
              {
                pathname: '/profile/5',
                query: {
                  username: 'XXXXXX',
                  addressCode: '123456',
                  person: JSON.stringify({
                    age: 18,
                  }),
                }
              }
            }>
              Profile 5 - with query string
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
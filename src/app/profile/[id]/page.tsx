'use client'

import Link from 'next/link';
import {useParams, useRouter} from 'next/navigation';

export default function ProfileID () {
  const params = useParams()
  const router = useRouter()

  return (
    <div>
      <h1>Profile page id: {params.id}</h1>
      <div onClick={router.back}>Back to main page</div>
      <Link href='#'><div onClick={router.back}>Back to main page</div></Link>
    </div>
  )
}
// ! Server side components are cached as default
// ! Client side components are NOT cached as default

"use client"


import Link from "next/link"


export default function CacheControl() {

  const randomNumber = Math.floor(Math.random() * 1000)

  return (
    <main>
      <Link href={'/'}>Back to main page</Link>
      <div>{`Randomly generated number to check CACHE: ${randomNumber}`}</div>
    </main>
  )
}




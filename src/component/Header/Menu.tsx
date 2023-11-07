'use client'

import Link from "next/link"

export default function Menu () {
  return (
    <div><Link href={'/cache'}>Cache Checking Page</Link></div>
  )
}
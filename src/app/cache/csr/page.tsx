'use client'

import { useEffect, useState } from "react";
import { useAppContext } from "@/context";

export default function CSR() {
  const {state, setState} = useAppContext()

  const [num, setNum] = useState(null)

  const call = async () => {
    const response = await fetch('http://localhost:3000/api/random', {
      cache: 'no-store' // default value
      // cache: 'force-cache'
    })
    const {number} = await response.json()
    setNum (number)
  }

  useEffect(() => {
    call()
  }, [])

  return (
    <main>
      <h2 className="font-bold">CSR page</h2>
      <p>{num}</p>
      <p>context name value is: <span className="font-bold">{state.name}</span></p>
      <button onClick={() => setState({name: 'efkan'})}>set a new name</button>
    </main>
  )
};
'use client'

import { useEffect, useState } from "react";
import { useAppContext } from "@/context";
import { userStore } from "@/app/store/user";

export default function CSR() {
  const {state, setState} = useAppContext()
  const {user, setUser, fetchUsers} = userStore((state: any) => state)


  const [num, setNum] = useState(null)

  const call = async () => {
    const response = await fetch('https://next14-git-main-efkans-projects.vercel.app/api/random', {
      cache: 'no-store' // default value
      // cache: 'force-cache'
    })
    const {number} = await response.json()
    setNum (number)
  }

  useEffect(() => {
    call()
  }, [])

  const onFetchUsersPress = async () => {
    const users = await fetchUsers()
    alert(JSON.stringify(users))
  }

  return (
    <main>
      <h2 className="font-bold">CSR page</h2>
      <p>{num}</p>
      <p>context name value is: <span className="font-bold">{state.name}</span></p>
      <button onClick={() => setState({name: 'efkan'})}>set name as `efkan`</button>
      <br />
      <br />
      <div>{'Zustand state -> user -> name value is:'} <span className='font-bold'>{user.name}</span></div>
      <div>{'Zustand state -> user -> role value is:'} <span className='font-bold'>{user.role}</span></div>
      <div>{'Zustand state -> user -> company value is:'} <span className='font-bold'>{user.company}</span></div>
      <button onClick={() => setUser({name: 'efkan'})}>set Zustand name value as `efkan`</button>
      <br />
      <br />
      <button onClick={onFetchUsersPress}>Fetch users asynchronously</button>
    </main>
  )
};
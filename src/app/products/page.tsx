'use client'

import { useEffect, useState } from "react"

type Product = {
  id: number
  name: string
}

export default function Products() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    try {
      setIsLoading(true)
      const getAllProds = async () => {
        const response = await fetch('/api/products')
        const data = await response.json()

        setData(data)
      }
      getAllProds()
    } catch (error) {
      console.log("useEffect - error:", error);
    } finally {
      setIsLoading(false)
    }
  }, [])


  if (isLoading) return 'Loading...'

  return (
    <div>
      <ul>
        {data.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </div>
  )
}
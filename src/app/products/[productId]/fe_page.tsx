'use client'
// !!! NOTE: when `use client` is used, useParams must be used

import { useEffect, useState } from 'react';
import {useParams, useSearchParams} from 'next/navigation'

type Product = {
  id: number
  name: string
}

export default function Product() {
  const params = useParams()
  const searchParams = useSearchParams()
  const searchParamsJSON = Object.fromEntries(searchParams);

  const [product, setProduct] = useState<Product>()

  const setProductById = async () => {
    const id = params.productId
    const response = await fetch(`http://localhost:3000/api/products/${id}`)
    const data = await response.json()
    console.log("Product - data:", data);

    setProduct(data)
  }

  useEffect(() => {
    setProductById()
  }, [])


  console.log("Product - params:", params);
  console.log("Product - searchParams object:", searchParamsJSON);
  console.log("Product - searchParams.get(new):", searchParams.get('new'));


  return <main>Product ID: {params.productId} - [new] value:{searchParamsJSON?.new}</main>
}
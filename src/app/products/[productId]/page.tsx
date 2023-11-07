
// // this is considered as a BackEnd component as default
// async function getProductById(id: number) {
//   const response = await fetch(`http://localhost:3000/api/products/${id}`)

//   return response.json()
// }

// export default async function Product({params, searchParams}: any) {
//   console.log("Product - params:", params);
//   console.log("Product - searchParams:", searchParams);

//   const product = await getProductById(params.productId)
//   console.log("Product - product:", product);

//   return (
//     <main>
//       <h1>BE component</h1>
//       <div>{product.id || 'not found'}</div>
//       <div>{product.name || 'not found'}</div>
//       <div>URL `productId` Param : {params.productId}</div>
//       <div>Query Param `new` value:{searchParams.new}</div>
//     </main>
//   )
// }




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


  return <main>Product ID: {params.productId} - [new] value:{searchParams.new}</main>
}
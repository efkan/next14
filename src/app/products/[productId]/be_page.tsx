// this is considered as a BackEnd component as default
async function getProductById(id: number) {
  const response = await fetch(`http://localhost:3000/api/products/${id}`)

  return response.json()
}

export default async function Product({params, searchParams}: any) {
  console.log("Product - params:", params);
  console.log("Product - searchParams:", searchParams);

  const product = await getProductById(params.productId)
  console.log("Product - product:", product);

  return (
    <main>
      <h1>BE component</h1>
      <div>{product.id || 'not found'}</div>
      <div>{product.name || 'not found'}</div>
      <div>URL `productId` Param : {params.productId}</div>
      <div>Query Param `new` value:{searchParams.new}</div>
    </main>
  )
}
const getRandomNumber = async () => {
  const response = await fetch('http://localhost:3000/api/random', {
    // cache: 'no-store'
    cache: 'force-cache', // default value
    next: {
      revalidate: 6 // seconds
    }
  })

  const data = await response.json()
  console.log("getRandomNumber - data:", data);
  return data
}

export default async function SSR() {
  const { number } = await getRandomNumber()

  return (
    <main>
      <h2 className="font-bold">{number}</h2>
    </main>
  )
};
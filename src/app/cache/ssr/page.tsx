const getRandomNumber = async () => {
  const response = await fetch('https://next14-git-main-efkans-projects.vercel.app/api/random', {
    // cache: 'no-store'
    // cache: 'force-cache', // default value
    next: {
      revalidate: 6 // seconds
    }
  })

  if (!response.ok) {
    console.error('Couldn\'t get a random generated number');
    return {number: 0}
  }
  const data = await response.json()
  console.log("getRandomNumber - data:", data);
  return data
}

export default async function SSR() {
  const { number } = await getRandomNumber()

  return (
    <main>
      <h2 className="font-bold">{number ?? 'Couldn\'t get a random generated number'}</h2>
    </main>
  )
};
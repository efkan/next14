// ! is used showing how to use Server Actions

export default function Posts({params}: any) {
  const savePost = async (data: FormData) => {
    'use server'

    const title = data.get('title')
    const description = data.get('description')

    const response = await fetch('https://next14-git-main-efkans-projects.vercel.app/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
    })

    if(response.ok) {
      const posts = await response.json()
      console.log("savePost - posts:", posts);
    } else {
      console.log("The new post couldn't be saved: ", response);
    }
  }

  return (
    <main className="flex gap-2 m-4">
      <form action={savePost} className="grid">
        <input className="p-2 border" name="title" type="text" />
        <textarea className="p-2 border" name="description" id="desc"></textarea>
        <button className="px-4 py-5 bg-sky-600" type="submit">Submit</button>
      </form>
    </main>
  )
}
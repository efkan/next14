const fetchPost = async (id: string) => {
  const post = await fetch(`/api/post/${id}`)
  return post.json()
}

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({params}: any) {
  const { post } = await fetchPost(params.id)

  return {
    title: post[0].title,
    description: post[0].description,
  }
}

export default function Posts({params}: any) {
  return <main>Post ID: {params.id}</main>
}
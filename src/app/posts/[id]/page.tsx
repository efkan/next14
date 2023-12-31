
// Shows a Dynamic SEO example

const fetchPost = async (id: string) => {
  const post = await fetch(`https://next14-git-main-efkans-projects.vercel.app/api/posts/${id}`)
  return post.json()
}


export async function generateMetadata ({params}: any) {
  const { post } = await fetchPost(params.id)
  console.log("generateMetadata - post:", post);

  return {
    // https://nextjs.org/docs/app/api-reference/functions/generate-metadata
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: 'https://nextjs14.vercel.app/',
      images: [
        {
          url: post.img_url,
          width: 800,
          height: 600,
          alt: post.description,
          // type: 'image/png',
          // secureUrl: 'https://nextjs14.vercel.app/og-image.jpg'
        }
      ],
      siteName: 'Nextjs14 with Efkan',
      locale: 'en_US',
      type: 'website',
    }
  }
}

export default function Posts({params}: any) {
  return <main>Post ID: {params.id}</main>
}
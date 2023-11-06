import Header from '@/component/Header'
import Image, { ImageProps } from 'next/image'
import { Cabin } from "next/font/google";
// import dockerLogo from '../../public/docker-logo.png';
import nextLogo from '../../public/next.svg';

const cabin = Cabin({ subsets: ['latin-ext']})

export default function Home() {
  const ImageComponent = (props: ImageProps) => {
    return (
      <Image
        alt={props.alt}
        src={props.src || "/docker-logo.png"}
        // quality={100}
        // src={dockerLogo}
        width={300}
        height={300}
      />
    )
  }

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-24">
        <div>Main Page</div>
        <div className={`${cabin.className} text-2xl`}>hello from the Docker container!</div>
        <div className='w-[200px] my-[10px]'>
          <ImageComponent alt="Nextjs logo" src={nextLogo} />
        </div>
        <ImageComponent alt='Docker app logo' src={'/docker-logo.png'} />
      </main>
    </>
  )
}

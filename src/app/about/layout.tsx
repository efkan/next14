import '@/app/about.css'

export default function AboutLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header>This is the About header</header>
      {children}
    </div>
  )
}
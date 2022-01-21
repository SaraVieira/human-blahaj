import dynamic from 'next/dynamic'

const Home = dynamic(() => import('@/views/Home'), {
  ssr: false,
})

const Page = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default Page

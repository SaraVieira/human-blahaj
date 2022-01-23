import dynamic from 'next/dynamic'

const Home = dynamic(() => import('@/views/Home'), {
  ssr: false,
})

const HomePage = () => <Home />

export default HomePage

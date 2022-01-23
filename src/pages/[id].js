import SharkPage from '@/views/SharkPage'
import sharks from '@/helpers/sharks'

export default SharkPage

export async function getStaticPaths() {
  const paths = sharks
    .filter((s) => s)
    .map((shark) => ({ params: { id: shark.image } }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { id } }) {
  const shark = sharks.filter((s) => s).find((s) => s.image === id)
  return {
    props: {
      allSharks: sharks,
      shark,
    },
  }
}

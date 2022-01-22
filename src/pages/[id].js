import sharks from '@/helpers/sharks'
import { gradients } from '@/helpers/gradients'
import Link from 'next/link'

const SharkPage = ({ shark, allSharks }) => {
  if (!allSharks) return null
  const background = gradients[Math.floor(Math.random() * gradients.length)]
  const newShark =
    allSharks[Math.floor(Math.random() * (allSharks?.length || 0))]
  return (
    <section style={{ background }} className='shark-wrapper'>
      <div>
        <img className='shark' src={`sharks/${shark.image}.jpg`} alt='' />
        {shark.credit && (
          <a
            className='credit'
            href={shark.credit}
            target='_blank'
            rel='noreferrer'
          >
            Image Credit
          </a>
        )}
      </div>
      <Link href={`/${newShark.image}`}>
        <a className='button'>ANOTHER</a>
      </Link>
    </section>
  )
}

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

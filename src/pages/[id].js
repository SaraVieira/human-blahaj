import sharks from '../helpers/sharks'
import { gradients } from '../helpers/gradients'
import Link from 'next/link'

const SharkPage = ({ shark }) => {
  const background = gradients[Math.floor(Math.random() * gradients.length)]
  const newShark = sharks[Math.floor(Math.random() * sharks.length)]

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
  const paths = sharks.map((shark) => ({ params: { id: shark.image } }))
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { id } }) {
  const shark = sharks.find((s) => s.image === id)
  return {
    props: {
      shark,
    },
  }
}

import { gradients } from '@/helpers/gradients'
import Link from 'next/link'
import Sparkles from '@/components/Sparkles'

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
      <section className='another-shark'>
        <Sparkles>
          <Link href={`/${newShark.image}`}>
            <a className='button'>ANOTHER</a>
          </Link>
        </Sparkles>
      </section>
    </section>
  )
}

export default SharkPage

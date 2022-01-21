import sharks from '../helpers/sharks'
import { gradients } from '../helpers/gradients'
import { shuffle } from '@/helpers/shuffle'

const All = () => {
  const background = gradients[Math.floor(Math.random() * gradients.length)]

  return (
    <section style={{ background }} className='shark-wrapper all'>
      {shuffle(sharks).map((shark) => (
        <div key={shark.image}>
          <div>
            <img className='shark' src={`sharks/${shark.image}.jpg`} />
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
        </div>
      ))}
    </section>
  )
}

export default All

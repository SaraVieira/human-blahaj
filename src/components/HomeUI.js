import Link from 'next/link'
import Sparkles from './Sparkles'

const HomeUI = ({ shark }) => (
  <>
    <main>
      <h1>Feeling Sad?</h1>
      <h2>Want to see some blåhaj{"'"}s doing human things?</h2>
      <div className='button-wrapper'>
        <Sparkles>
          <Link href={shark.image}>
            <a style={{ margin: 0 }} className='button'>
              {' '}
              Show me a random blåhaj
            </a>
          </Link>
        </Sparkles>
        <Link href='all'>
          <a
            className='button'
            style={{
              marginTop: -13,
            }}
          >
            {' '}
            Show me ALL the blåhajs
          </a>
        </Link>
      </div>
    </main>
    <footer className='credit-footer'>
      <a href='https://skfb.ly/o8pRw' target='_blank' rel='noreferrer'>
        Low Poly Blåhaj
      </a>{' '}
      by{' '}
      <a
        href='https://twitter.com/IsabelleDotJpeg'
        target='_blank'
        rel='noreferrer'
      >
        IsabelleDotJpeg
      </a>
    </footer>
  </>
)

export default HomeUI

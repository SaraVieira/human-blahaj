import { Link, useParams } from 'react-router-dom'
import sharks from './sharks.json'
import { gradients } from './utils/gradients'

const SharkPage = () => {
  const { id } = useParams()
  const shark = sharks.find((s) => s.image === id)
  var background = gradients[Math.floor(Math.random() * gradients.length)]
  var newShark = sharks[Math.floor(Math.random() * sharks.length)]

  return (
    <section style={{ background }} className="shark-wrapper">
      <div>
        <img className="shark" src={`sharks/${shark.image}.jpg`} />
        {shark.credit && (
          <a
            className="credit"
            href={shark.credit}
            target="_blank"
            rel="noopener"
          >
            Image Credit
          </a>
        )}
      </div>
      <Link className="button" to={`/${newShark.image}`}>
        ANOTHER
      </Link>
    </section>
  )
}

export default SharkPage

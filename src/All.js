import { Link, useParams } from 'react-router-dom'
import sharks from './sharks.json'
import { gradients } from './utils/gradients'

const All = () => {
  var background = gradients[Math.floor(Math.random() * gradients.length)]

  return (
    <section style={{ background }} className="shark-wrapper all">
      {sharks.map((shark) => (
        <div>
          <div>
            <img className="shark" src={`${shark.image}.jpg`} />
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
        </div>
      ))}
    </section>
  )
}

export default All

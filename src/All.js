import { Link, useParams } from 'react-router-dom'
import sharks from './sharks.json'
import { gradients } from './utils/gradients'

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}

const All = () => {
  var background = gradients[Math.floor(Math.random() * gradients.length)]

  return (
    <section style={{ background }} className="shark-wrapper all">
      {shuffle(sharks).map((shark) => (
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

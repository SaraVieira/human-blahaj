import { useEffect, useState } from 'react'

const Slider = ({ slides }) => {
  // Create a curr state indicating what's the current slide's index
  const [curr, setCurr] = useState(0)
  const { length } = slides

  const goToNext = () => {
    // Check if we've reached the final slide in the array
    // If so, go back to 0, else curr + 1
    setCurr(curr === length - 1 ? 0 : curr + 1)
  }

  //   useEffect(() => {
  //     // At every render, set a new timeout to go to the next slide
  //     setTimeout(goToNext, 2000)
  //     // And, when unmounting <Slider />, clear the timeout
  //     // See the reactjs.org docs on hooks for more info
  //     return function () {
  //       clearTimeout(goToNext)
  //     }
  //   })
  if (!Array.isArray(slides) || length <= 0) {
    return null
  }

  return (
    <section className="slider">
      {slides.map((s, i) => (
        <div
          // if active slide, include the "active" class
          className={i === curr ? 'slide active' : 'slide'}
          key={s.image}
          aria-hidden={i !== curr}
        >
          {i === curr && (
            <>
              <img
                className="shark"
                src={`${s.image}.jpg`}
                alt={`Adorable blahaj`}
              />
              {s.credit && (
                <a
                  className="credit"
                  href={s.credit}
                  target="_blank"
                  rel="noopener"
                >
                  Image Credit
                </a>
              )}
            </>
          )}
        </div>
      ))}
      <button onClick={goToNext}>Next</button>
    </section>
  )
}

export default Slider

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'
import sharks from './sharks.json'
import { Link } from 'react-router-dom'
import Model from './components/Model'
import Shark from './components/Shark'
import Rig from './components/Rig'

export default function App({
  speed = 1,
  count = 200,
  depth = 30,
  easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2))
}) {
  var shark = sharks[Math.floor(Math.random() * sharks.length)]
  return (
    <>
      <main>
        <h1>Feeling Sad?</h1>
        <h2>Want to see some blåhaj{"'"}s doing human things?</h2>
        <Link className="button" to={shark.image}>
          Show me a random blåhaj
        </Link>
        <button>Show me ALL the blåhajs</button>
      </main>

      <Suspense fallback="">
        <Canvas>
          <color attach="background" args={['#f0f0f0']} />
          <Environment preset="dawn" />

          {Array.from(
            { length: count },
            (_, i) => <Shark key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} /> /* prettier-ignore */
          )}
          <Rig>
            <Model />
          </Rig>
          <EffectComposer multisampling={0}>
            <DepthOfField
              target={[0, 0, 10]}
              focalLength={0.15}
              bokehScale={20}
              height={700}
            />
          </EffectComposer>
        </Canvas>
      </Suspense>
    </>
  )
}

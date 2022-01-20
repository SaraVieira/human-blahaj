import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import {
  EffectComposer,
  DepthOfField,
  Vignette
} from '@react-three/postprocessing'
import sharks from './sharks.json'
import { Link } from 'react-router-dom'
import Model from './components/Model'
import Shark from './components/Shark'
import Rig from './components/Rig'
import { Bloom } from '@react-three/postprocessing'
import { BlendFunction, Resizer, KernelSize } from 'postprocessing'

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
        <div className="button-wrapper">
          <Link className="button" style={{ margin: 0 }} to={shark.image}>
            Show me a random blåhaj
          </Link>
          <Link className="button" to="all">
            Show me ALL the blåhajs
          </Link>
        </div>
      </main>

      <Suspense fallback="">
        <Canvas>
          <color attach="background" args={['#dcf0ee']} />
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
              bokehScale={30}
              height={700}
            />{' '}
            <Bloom
              intensity={0.4} // The bloom intensity.
              blurPass={undefined} // A blur pass.
              width={Resizer.AUTO_SIZE} // render width
              height={Resizer.AUTO_SIZE} // render height
              kernelSize={KernelSize.LARGE} // blur kernel size
              luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
            />
            <Vignette
              offset={0.5} // vignette offset
              darkness={0.5} // vignette darkness
              eskil={false} // Eskil's vignette technique
              blendFunction={BlendFunction.NORMAL} // blend mode
            />
          </EffectComposer>
        </Canvas>
      </Suspense>
    </>
  )
}

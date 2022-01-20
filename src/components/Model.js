import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import { useFrame } from '@react-three/fiber'

// credit: https://sketchfab.com/3d-models/low-poly-blahaj-5ac23e0cd44d49dcaaa14967f7d7a778
export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/blaHAJ.gltf')
  const prefersReducedMotion = usePrefersReducedMotion()

  useFrame((state) => {
    if (!prefersReducedMotion) {
      group.current.children.forEach((child, index) => {
        child.position.y +=
          Math.sin(index * 1000 + state.clock.elapsedTime) / 500
        child.rotation.x +=
          (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 2000
        child.rotation.y +=
          (Math.cos(index * 1000 + state.clock.elapsedTime) * Math.PI) / 3000
        child.rotation.z +=
          (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 4000
      })
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Material.001']}
        position={[-0.04, 0.23, 0.57]}
        rotation={[-1.59, 0, 2.12]}
      />
    </group>
  )
}

useGLTF.preload('/blaHAJ.gltf')

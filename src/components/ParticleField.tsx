import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 2000 }) {
  const mesh = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const color1 = new THREE.Color('#8b5cf6')
    const color2 = new THREE.Color('#06b6d4')
    const color3 = new THREE.Color('#ec4899')

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50

      const colorChoice = Math.random()
      const selectedColor = colorChoice < 0.33 ? color1 : colorChoice < 0.66 ? color2 : color3

      colors[i * 3] = selectedColor.r
      colors[i * 3 + 1] = selectedColor.g
      colors[i * 3 + 2] = selectedColor.b
    }

    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03

      const positions = mesh.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + positions[i3]) * 0.001
      }
      mesh.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingGeometry() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15
      mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <mesh ref={mesh} position={[3, 0, -5]}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshBasicMaterial
        color="#8b5cf6"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingGeometry />
      </Canvas>
    </div>
  )
}

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'

// Borrowed from https://threejs.org/examples/#webgl_buffergeometry
const Figure = () => {
  const container = useRef()

  useEffect(() => {
    let camera
    let scene
    let renderer
    let attractor

    let x = 15 * Math.random()
    let y = 15 * Math.random()
    let z = 15 * Math.random()

    const scale = 0.03 // for reducing overall displayed size
    const speed = 5 // integer, increase for faster visualization

    const steps = 100000
    let current = 1
    const shown = 10000

    const beta = 8/3
    const rho = 30
    const sigma = 10

    // Tiempo de velocidad de viaje de linea
    const dt = 0.001

    function draw() {
      const { geometry } = attractor

      geometry.attributes.position.array.copyWithin(3)
      geometry.attributes.color.array.copyWithin(3)

      if (current < steps) {
        
        const dx = sigma * (y - x) * dt
        const dy = (x * (rho - z) - y) * dt
        const dz = (x * y - beta * z) * dt

        x += dx
        y += dy
        z += dz

        geometry.attributes.position.set([scale * x, scale * y, scale * z], 0)
      }

      if (current < steps + shown) {
        current += 1
      } else {
        current = 0
      }
    }

    function render() {
      for (let i = 0; i < speed; i += 1) draw()

      attractor.geometry.attributes.position.needsUpdate = true
      attractor.geometry.attributes.color.needsUpdate = true
      attractor.rotation.z += 0.001

      renderer.render(scene, camera)
    }
    function init() {
      scene = new THREE.Scene()

      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        10
      )
      camera.position.set(0, 1.6, 1)

      //

      const geometry = new THREE.BufferGeometry()

      const positions = new Float32Array(3 * shown)

      for (let i = 0; i < positions.length; i += 3) {
        positions.set([scale * x, scale * y, scale * z], i)
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

      const colors = new Float32Array(3 * shown)

      for (let i = 0; i < positions.length; i += 3) {
        colors.set([250, 250, 250], i)
      }

      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const material = new THREE.LineBasicMaterial({ vertexColors: true })

      attractor = new THREE.Line(geometry, material)
      attractor.position.set(0, 1.5, -2)
      attractor.frustumCulled = false // critical to avoid blackouts!
      scene.add(attractor)

      const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10),
        new THREE.MeshPhongMaterial()
      )
      ground.geometry.rotateX((-90 * Math.PI) / 180)
      scene.add(ground)


      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(550, 550)
      container.current.appendChild(renderer.domElement)

      if (typeof TESTING !== 'undefined') {
        for (let i = 0; i < 200; i += 1) {
          render()
        }
      }
    }
    init()

    function animate() {
      renderer.setAnimationLoop(render)
    }

    animate()
  }, [])

  return <div ref={container} className='figure' />
}

export default Figure

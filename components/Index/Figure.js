import {
  PerspectiveCamera,
  Scene,
  CircleGeometry,
  Vector2,
  Vector4,
  ShaderMaterial,
  Mesh,
  WebGLRenderer
} from 'three'
import React, { useEffect, useRef } from 'react'
import fragment from '../Shader/fragment.glsl'
import vertex from '../Shader/vertex.glsl'

// Credits to yuri artyukh and richardmattka
const Figure = () => {
  const container = useRef()

  useEffect(() => {
    let camera
    let scene
    let renderer
    let uniforms

    const init = () => {
      camera = new PerspectiveCamera(70, 800 / 600, 0.001, 500)

      camera.position.set(0, 0, 2)
      scene = new Scene()

      const geometry = new CircleGeometry(0.55, 16)
      uniforms = {
        time: { type: 'f', value: 0 },
        resolution: { type: 'v4', value: new Vector4() },
        mouse: { type: 'v2', value: new Vector2(0, 0) }
      }
      const material = new ShaderMaterial({
        uniforms,
        transparent: true,
        vertexShader: vertex,
        fragmentShader: fragment
      })

      const mesh = new Mesh(geometry, material)
      scene.add(mesh)

      renderer = new WebGLRenderer({ antialias: true, alpha: true })
      const pixelRatio = window.devicePixelRatio === 1 ? window.devicePixelRatio * 2 : window.devicePixelRatio
      renderer.setPixelRatio(pixelRatio)
      container.current.appendChild(renderer.domElement)

      renderer.setSize(800, 600)
      camera.fov = 2 * (180 / Math.PI) * Math.atan(1.1 / (2 * camera.position.z))
      camera.updateProjectionMatrix()
    }

    init()
    const onMouseMove = (event) => {
      uniforms.mouse.value = {
        x: (event.clientX / (window.innerWidth + 450)) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    const animate = () => {
      requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }
    animate()
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      // Make the entity disappear when component unmounts
      renderer.setPixelRatio(0)
    }
  }, [])

  return <div ref={container} className='figure'  />
}

export default Figure

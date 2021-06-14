import * as THREE from 'three'
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

    function init() {
      camera = new THREE.PerspectiveCamera(70, 720 / 480, 0.001, 1000)

      camera.position.set(0, 0, 2)
      scene = new THREE.Scene()

      const geometry = new THREE.BoxGeometry()
      uniforms = {
        time: { type: 'f', value: 0 },
        resolution: { type: 'v4', value: new THREE.Vector4() },
        mouse: { type: 'v2', value: new THREE.Vector2(0, 0) }
      }
      const material = new THREE.ShaderMaterial({
        extensions: {
          derivatives: '#extension GL_OES_standard_derivative : enable'
        },
        side: THREE.DoubleSide,
        uniforms,
        transparent: true,
        vertexShader: vertex,
        fragmentShader: fragment
      })

      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio * 2)
      container.current.appendChild(renderer.domElement)

      renderer.setSize(720, 480)
      camera.fov = 2 * (180 / Math.PI) * Math.atan(1.1 / (2 * camera.position.z))
      camera.updateProjectionMatrix()
    }

    init()
    function mouseEvents() {
      const mouse = new THREE.Vector2()
      function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        uniforms.mouse.value = mouse

      }
      window.addEventListener('mousemove', onMouseMove, false)
    }
    function animate() {
      requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }

    animate()
    mouseEvents()
  }, [])

  return <div ref={container} className='figure' />
}

export default Figure

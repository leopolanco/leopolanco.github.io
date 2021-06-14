import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import fragment from '../Shader/fragment.glsl'
import vertex from '../Shader/vertex.glsl'

// Borrowed from https://threejs.org/examples/#webgl_buffergeometry
const Figure = () => {
  const container = useRef()

  useEffect(() => {
    let camera
    let scene
    let renderer
    let uniforms

    function init() {
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1000)

      camera.position.set(0, 0, 2)
      scene = new THREE.Scene()

      const geometry = new THREE.BoxGeometry(1, 1)
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
      const width = container.offsetWidth
      const height = container.offsetHeight
      const imageAspect = 1
      let a1
      let a2

      if (height / width > imageAspect) {
        a1 = (width / height) * imageAspect
        a2 = 1
      } else {
        a2 = (width / height) * imageAspect
        a1 = 1
      }

      uniforms.resolution.value.x = width
      uniforms.resolution.value.y = height
      uniforms.resolution.value.z = a1
      uniforms.resolution.value.w = a2
      camera.fov = 2 * (180 / Math.PI) * Math.atan(1.1 / (2 * camera.position.z))
      camera.updateProjectionMatrix()
    }

    init()

    function animate() {
      requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return <div ref={container} className='figure' />
}

export default Figure

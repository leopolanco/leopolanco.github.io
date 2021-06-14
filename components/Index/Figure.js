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

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    function init() {
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1000)

      camera.position.set(0, 0, 2)
      scene = new THREE.Scene()

      const geometry = new THREE.BoxGeometry(1, 1)

      uniforms = {
        time: { type: 'f', value: 0 },
        resolution: { type: 'v4', value: new THREE.Vector4() },
        mouse: { type: 'v2', value: new THREE.Vector2(0, 0) },
        uvRate1: {
          value: new THREE.Vector2(1, 1)
        }
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

      renderer = new THREE.WebGLRenderer()
      renderer.setPixelRatio(window.devicePixelRatio)
      container.current.appendChild(renderer.domElement)

      onWindowResize()

      window.addEventListener('resize', onWindowResize)
    }

    function resize() {
      camera.fov = 2 * (180 / Math.PI) * Math.atan(.7 / (2 * camera.position.z))

      camera.updateProjectionMatrix()
    }
    init()
    function animate() {
      requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }

    animate()
    resize()
    console.log(container)
  }, [])

  return <div ref={container} className='figure' />
}

export default Figure

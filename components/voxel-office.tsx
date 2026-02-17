import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { loadGLTFModel } from '../lib/model'
import { OfficeSpinner, OfficeContainer } from './voxel-office-loader'


const VoxelOffice: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const refRenderer = useRef<THREE.WebGLRenderer>(null)
  
  const urlDogGLB = "/3d_obj/office.glb"
  
  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [])
   
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputColorSpace = THREE.SRGBColorSpace
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      
      const scene = new THREE.Scene()
      
      const target = new THREE.Vector3(-0.5, 0.3, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )

      const scale = scH * 0.0025 + 1.2
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      
      const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
      scene.add(ambientLight)
      
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.autoRotateSpeed = 2.0  // Adjust speed of rotation
      controls.target = target
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      
      let req: number | null = null
      
      const animate = () => {
        req = requestAnimationFrame(animate)
        
        controls.update()
        renderer.render(scene, camera)
      }
      
      loadGLTFModel(scene, urlDogGLB, {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })
      
      return () => {
        if (req !== null) {
          cancelAnimationFrame(req)
        }
        controls.dispose()
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])
  
  return (
    <OfficeContainer ref={refContainer}>
      {loading && <OfficeSpinner />}
    </OfficeContainer>
  )
}

export default VoxelOffice



//
//
// import { useState, useEffect, useRef, useCallback } from 'react'
// import * as THREE from 'three'
// import { loadGLTFModel } from '../lib/model'
// import { OfficeSpinner, OfficeContainer } from './voxel-office-loader'
//
// const VoxelOffice: React.FC = () => {
//   const refContainer = useRef<HTMLDivElement>(null)
//   const [loading, setLoading] = useState<boolean>(true)
//   const refRenderer = useRef<THREE.WebGLRenderer>(null)
//
//   const urlDogGLB = "/3d_obj/office.glb"
//
//   const handleWindowResize = useCallback(() => {
//     const { current: renderer } = refRenderer
//     const { current: container } = refContainer
//     if (container && renderer) {
//       const scW = container.clientWidth
//       const scH = container.clientHeight
//       renderer.setSize(scW, scH)
//     }
//   }, [])
//
//   useEffect(() => {
//     const { current: container } = refContainer
//     if (!container) return
//
//     const scW = container.clientWidth
//     const scH = container.clientHeight
//
//     const renderer = new THREE.WebGLRenderer({
//       antialias: true,
//       alpha: true
//     })
//     renderer.setPixelRatio(window.devicePixelRatio)
//     renderer.setSize(scW, scH)
//     renderer.outputColorSpace = THREE.SRGBColorSpace
//     container.appendChild(renderer.domElement)
//     refRenderer.current = renderer
//
//     const scene = new THREE.Scene()
//
//     const target = new THREE.Vector3(-0.2, 1.5, 0)
//     const initialCameraPosition = new THREE.Vector3(
//       20 * Math.sin(0.2 * Math.PI),
//       10,
//       20 * Math.cos(0.2 * Math.PI)
//     )
//
//     const scale = scH * 0.00325 + 3.2
//     const camera = new THREE.OrthographicCamera(
//       -scale,
//       scale,
//       scale,
//       -scale,
//       0.01,
//       50000
//     )
//     camera.position.copy(initialCameraPosition)
//     camera.lookAt(target)
//
//     const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
//     scene.add(ambientLight)
//
//     // Oscillation refs
//     let req: number | null = null
//     const rotationSpeed = 0.05 // Adjust speed
//     let angle = 0
//
//     const animate = () => {
//       req = requestAnimationFrame(animate)
//
//       // Oscillate angle from 0 to PI (180°) and back
//       angle += rotationSpeed
//       const oscillation = Math.sin(angle) // sin goes from -1 to 1
//       const radius = initialCameraPosition.distanceTo(target)
//       const y = initialCameraPosition.y
//       // const x = target.x + radius * Math.sin(Math.PI * oscillation) // left/right swing
//       // const z = target.z + radius * Math.cos(Math.PI * oscillation) // keep distance
//
//
//       const leftRotation = Math.PI / 2  // 90° to each side
//       const rightRotation = Math.PI / 4   // 90° to each side
//       const x = target.x + radius * Math.sin(rightRotation * oscillation)
//       const z = target.z + radius * Math.cos(leftRotation * oscillation)
//
//       camera.position.set(x, y, z)
//       camera.lookAt(target)
//
//       renderer.render(scene, camera)
//     }
//
//     loadGLTFModel(scene, urlDogGLB, {
//       receiveShadow: false,
//       castShadow: false
//     }).then(() => {
//       animate()
//       setLoading(false)
//     })
//
//     return () => {
//       if (req !== null) cancelAnimationFrame(req)
//       renderer.domElement.remove()
//       renderer.dispose()
//     }
//   }, [])
//
//   useEffect(() => {
//     window.addEventListener('resize', handleWindowResize, false)
//     return () => {
//       window.removeEventListener('resize', handleWindowResize, false)
//     }
//   }, [handleWindowResize])
//
//   return (
//     <OfficeContainer ref={refContainer}>
//       {loading && <OfficeSpinner />}
//     </OfficeContainer>
//   )
// }
//
// export default VoxelOffice

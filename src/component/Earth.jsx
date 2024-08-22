import React from 'react'
import {Suspense,useRef,useEffect,useState} from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import {useLoader ,useFrame, Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, useAnimations, useHelper } from '@react-three/drei';
import *as THREE from "three"
import Loader from './Loader';

function Earth({isMobile}) {
  const ref =useRef()
  const Motion = ()=>{
    useFrame((_state,delta)=>{
    ref.current.rotation.y += delta / 2.
    
    })  
  }
  


  const earth =useLoader(GLTFLoader,"planet/scene.gltf")
  return (
    <>
    <mesh>
    <primitive  ref={ref} object={earth.scene}  scale={isMobile?2.7:3.4} />
    </mesh>
    <Motion/>
    </>
  )
}
const EarthCanvas =()=>{
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  
  const mediaQuery = window.matchMedia('(max-width: 500px)');
  
  setIsMobile(mediaQuery.matches);
  
  const handleMediaQueryChange = (event) => {
  setIsMobile(event.matches)}
  
  mediaQuery.addEventListener('change',
  handleMediaQueryChange);
  
  return () =>
  mediaQuery.removeEventListener('change',
  handleMediaQueryChange);
  }, [])
  
  return(<>
  <Canvas dpr={[1, 2]}  camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}  gl={{preserveDrawingBuffer:true}}>
  <Suspense fallback={<Loader/>}>
    <OrbitControls   enableZoom={false} rotateSpeed={0.5}
    enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <spotLight position={[0,3,0]} intensity={200}/>
        <pointLight position={[0,0,0.9]} intensity={5} distance={3}/>
         
          <Earth isMobile={isMobile}/>
         
  </Suspense>
  <Preload all/>
  </Canvas>
  
  </>






  )
}
export default EarthCanvas
import {React,Suspense,useRef,useEffect,useState} from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import {useLoader ,useFrame, Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, useAnimations, useHelper } from '@react-three/drei';
import *as THREE from "three"
import Loader from './Loader';
import Flag from "./Flag"

function Computer(props) {
  const computer = useLoader(GLTFLoader,"desktop_pc/scene.gltf")
  const ref =useRef()
  
  const Motion = ()=>{
  useFrame((_state,delta)=>{
  ref.current.rotation.y += delta
  })  
}



const Helper = ()=> {useHelper(ref,THREE.SpotLightHelper,"red")}
  return (
    <>        
  <Canvas className='' camera={{position:[20,3,5] ,fov:25}}  gl={{preserveDrawingBuffer:true}}>
  <Suspense fallback={<Loader/>}>
    <OrbitControls  enableZoom={false} rotateSpeed={0.5}
    enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <spotLight ref={ref} position={[0,5,0]} intensity={300}/>
        <mesh>
          <primitive object={computer.scene} position={props.isMobile?[0,-3,-3.5]:[0,-3,-1.5]} scale={ props.isMobile?1.1:1.1}  rotation={[-0.01,-0.2,-0.1]}/>
          
        </mesh>
      
      <mesh position={props.isMobile?[0,-2.8,-1.6]:[0,-2.8,-2.5]} scale={ props.isMobile?4:5}  rotation={[0,2.4,0]}>
          <Flag/>
      </mesh>
  </Suspense>
  <Preload all/>
  </Canvas>
  
    </>
  )
}

export default Computer
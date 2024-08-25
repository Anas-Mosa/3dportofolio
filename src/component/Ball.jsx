import React from 'react'
import { Canvas} from '@react-three/fiber'
import {Suspense,useRef,useEffect,useState} from 'react'
import Loader from './Loader';
import { useTexture, Preload, Float,OrbitControls, Decal } from '@react-three/drei';

function Ball({imgurl}) {
const [decal] =useTexture([imgurl])
  return (
    
    <Float speed={1.75} floatIntensity={3} rotationIntensity={1}>
    <ambientLight intensity={0.25}/>
    <directionalLight position={[0,0,0.05]}/>
    <mesh scale={2.75}>
      <icosahedronGeometry args={[1,1]}/>
      <meshStandardMaterial  color="#fff8eb" polygonOffset polygonOffsetFactor={-5}/>
    <Decal map={decal} position={[0,0,1]} rotation={[2 * Math.PI,0,6.25]}/>
     
    </mesh>
    </Float>
    
    
  )
}

const BallCanvas =({icon})=>{
  return(  <Canvas gl={{preserveDrawingBuffer:true}}>
      
      <OrbitControls  enableZoom={false}/>
            
    
    <Suspense fallback={<Loader/>}>
          
          
            <Ball imgurl={icon}/>
            
            </Suspense>
        <Preload all/>
    
    </Canvas>
    
  )
}

export default BallCanvas
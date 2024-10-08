import { Points,PointMaterial, Preload } from '@react-three/drei'
import { Canvas,useFrame } from '@react-three/fiber'
import * as random from "maath/random/dist/maath-random.esm";

import React, { Suspense, useRef,useState } from 'react'

function Stars() {
const starsRef= useRef()
const [sphere] = useState(() => random.inSphere(new Float32Array(5000 *3), { radius: 1.2 }));



  useFrame((_state,delta)=>{
  starsRef.current.rotation.y -= delta / 15
  starsRef.current.rotation.x -= delta / 10

  
  }) 
return (
    <group rotation={[0,0,Math.PI / 4]} >
    <Points positions={sphere} stride={3} ref={starsRef} frustumCulled>
      <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation={true} depthWrite={false}/>
    </Points>
    </group>
  )
}


const StarsCanvas = ()=>{
  return(
    <>
    <div className='w-full h-auto absolute inset-0 z-0'>
      <Canvas camera={{position:[0,0,1]}}>
        <Suspense fallback={null}>
        <Stars/>
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
    </>
  )

}
export default StarsCanvas
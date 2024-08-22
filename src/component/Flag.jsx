import React, { useRef ,useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Flag(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.glb')
  const { actions , names} = useAnimations(animations, group)
  useEffect(() => {
    actions[names[0]].reset().fadeIn(5).play()
    
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="988e981dec904a1bb8b5b741de1b4f59fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_890"
                      geometry={nodes.Object_890.geometry}
                      material={materials.Flag_Mat}
                      skeleton={nodes.Object_890.skeleton}
                    />
                    <group name="Object_889" position={[0, 31.142, -7.503]} />
                  </group>
                </group>
                <group name="Flag" position={[0, 31.142, -7.503]} />
                <group
                  name="Cylinder"
                  position={[0.026, 0, 0.3]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.331}>
                  <mesh
                    name="Cylinder_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_Material001_0.geometry}
                    material={materials['Material.001']}
                  />
                </group>
                <group
                  name="Cylinder001"
                  position={[0, 2.609, 0.291]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={2.957}>
                  <mesh
                    name="Cylinder001__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001__0.geometry}
                    material={materials['Cylinder.001__0']}
                  />
                </group>
                <group
                  name="Camera"
                  position={[91.14, 41.543, -17.113]}
                  rotation={[-3.141, -0.112, 3.035]}
                  scale={100}>
                  <group name="Object_897" />
                </group>
                <group name="Spot" position={[0, 126.485, 0]} scale={7.507}>
                  <group name="Object_899" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_900" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Flag
useGLTF.preload('/scene.glb')




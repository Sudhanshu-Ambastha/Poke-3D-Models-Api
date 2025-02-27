/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/27.glb -o models/gltfjsx/regular/27.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/27.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group scale={2.54}>
        <group position={[0, 0.271, 0.023]} rotation={[0.518, 0, Math.PI / 2]}>
          <primitive object={nodes.Feeler} />
          <primitive object={nodes.Hips} />
          <primitive object={nodes.Spine} />
        </group>
      </group>
      <skinnedMesh geometry={nodes.Sandshrew_Roll.geometry} material={materials['Material #47']} skeleton={nodes.Sandshrew_Roll.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={2.54} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
        <skinnedMesh geometry={nodes.Sandshrew_1.geometry} material={materials['Material #35']} skeleton={nodes.Sandshrew_1.skeleton} />
        <skinnedMesh geometry={nodes.Sandshrew_2.geometry} material={materials['Material #36']} skeleton={nodes.Sandshrew_2.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/27.glb')

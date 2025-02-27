/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/706.glb -o models/gltfjsx/regular/706.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/706.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group scale={2.54}>
        <group position={[0, 0.857, 0.052]} rotation={[0.406, 0, Math.PI / 2]}>
          <primitive object={nodes.FeelerA} />
          <primitive object={nodes.FeelerB} />
          <primitive object={nodes.FeelerC} />
          <primitive object={nodes.Hips} />
          <primitive object={nodes.Spine1} />
        </group>
      </group>
      <skinnedMesh geometry={nodes.Goodra_GooDrops.geometry} material={materials['Material #10']} skeleton={nodes.Goodra_GooDrops.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={2.54} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
        <skinnedMesh geometry={nodes.Goodra_1.geometry} material={materials['Material #10']} skeleton={nodes.Goodra_1.skeleton} />
        <skinnedMesh geometry={nodes.Goodra_2.geometry} material={materials['Material #11']} skeleton={nodes.Goodra_2.skeleton} />
        <skinnedMesh geometry={nodes.Goodra_3.geometry} material={materials['Material #12']} skeleton={nodes.Goodra_3.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/706.glb')

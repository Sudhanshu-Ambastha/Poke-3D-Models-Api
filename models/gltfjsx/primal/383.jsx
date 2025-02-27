/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/primal/383.glb -o models/gltfjsx/primal/383.jsx 
Author: LunaEagle (https://sketchfab.com/LunaEagle)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/groudon-primal-890017dfb43e40f2a013ffc3bdd4d622
Title: Groudon Primal
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/primal/383.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh geometry={nodes.Object_6.geometry} material={materials.pm0383_51_00_BodyBInc00} skeleton={nodes.Object_6.skeleton} />
        <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.pm0383_51_00_BodyEnv01} skeleton={nodes.Object_7.skeleton} />
        <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.pm0383_51_00_BodyEnv02} skeleton={nodes.Object_8.skeleton} />
        <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.pm0383_51_00_BodyEnvVco} skeleton={nodes.Object_9.skeleton} />
        <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.pm0383_51_00_Body00} skeleton={nodes.Object_10.skeleton} />
        <skinnedMesh geometry={nodes.Object_11.geometry} material={materials.pm0383_51_00_BodyEnv00} skeleton={nodes.Object_11.skeleton} />
        <skinnedMesh geometry={nodes.Object_12.geometry} material={materials.pm0383_51_00_Eye} skeleton={nodes.Object_12.skeleton} />
        <skinnedMesh geometry={nodes.Object_13.geometry} material={materials.pm0383_51_00_BodyVco} skeleton={nodes.Object_13.skeleton} />
        <skinnedMesh geometry={nodes.Object_14.geometry} material={materials.pm0383_51_00_BodyBInc01} skeleton={nodes.Object_14.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/primal/383.glb')

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/884.glb -o models/gltfjsx/regular/884.jsx 
Author: Dodogamer (https://sketchfab.com/lazaronogueira832)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/duraludon-with-animation-e4a3e4c21a7e41099e70192acd41cddb
Title: Duraludon With Animation
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/884.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="af95eaa8e67345a488fb93881441bfadfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" scale={50}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_69" scale={50} />
                    <group name="Object_71" scale={50} />
                    <skinnedMesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials['pm0884_00_00-BodyA01']} skeleton={nodes.Object_70.skeleton} />
                    <skinnedMesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials['pm0884_00_00-BodyAEnv00']} skeleton={nodes.Object_72.skeleton} />
                    <skinnedMesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials['pm0884_00_00-BodyAEnv01']} skeleton={nodes.Object_73.skeleton} />
                    <skinnedMesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials['pm0884_00_00-BodyA00']} skeleton={nodes.Object_74.skeleton} />
                    <skinnedMesh name="Object_75" geometry={nodes.Object_75.geometry} material={materials['pm0884_00_00-BodyA01']} skeleton={nodes.Object_75.skeleton} />
                    <skinnedMesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials['pm0884_00_00-BodyBInc']} skeleton={nodes.Object_76.skeleton} />
                    <skinnedMesh name="Object_77" geometry={nodes.Object_77.geometry} material={materials['pm0884_00_00-Eye']} skeleton={nodes.Object_77.skeleton} />
                  </group>
                </group>
                <group name="pm0884_00_00_TongueSkin" scale={50} />
                <group name="pm0884_00_00_BodySkin" scale={50} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/884.glb')

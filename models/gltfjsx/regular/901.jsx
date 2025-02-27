/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/regular/901.glb -o models/gltfjsx/regular/901.jsx 
Author: Forsaken AR Official (https://sketchfab.com/FNAF_AR_Official)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mobile-pokemon-home-0901-ursaluna-bloodmoon-d35184929ddb4d45a17704713d4a5a2e
Title: Mobile - Pokemon HOME - 0901 Ursaluna Bloodmoon
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/901.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="bloodmoon_ursaluna_with_animfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" scale={50}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_105" scale={50} />
                    <group name="Object_112" scale={50} />
                    <group name="Object_114" scale={50} />
                    <skinnedMesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials['pm0901_11_00-BodyB00']} skeleton={nodes.Object_106.skeleton} />
                    <skinnedMesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials['pm0901_11_00-BodyB01']} skeleton={nodes.Object_107.skeleton} />
                    <skinnedMesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials['pm0901_11_00-REye']} skeleton={nodes.Object_108.skeleton} />
                    <skinnedMesh name="Object_109" geometry={nodes.Object_109.geometry} material={materials['pm0901_11_00-LEye']} skeleton={nodes.Object_109.skeleton} />
                    <skinnedMesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials['pm0901_11_00-BodyA00']} skeleton={nodes.Object_110.skeleton} />
                    <skinnedMesh name="Object_111" geometry={nodes.Object_111.geometry} material={materials['pm0901_11_00-BodyA01']} skeleton={nodes.Object_111.skeleton} />
                    <skinnedMesh name="Object_113" geometry={nodes.Object_113.geometry} material={materials['pm0901_11_00-BodyB01']} skeleton={nodes.Object_113.skeleton} />
                    <skinnedMesh name="Object_115" geometry={nodes.Object_115.geometry} material={materials['pm0901_11_00-BodyB01']} skeleton={nodes.Object_115.skeleton} />
                    <skinnedMesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials['pm0901_11_00-BodyB00']} skeleton={nodes.Object_116.skeleton} />
                  </group>
                </group>
                <group name="pm0901_11_00_BodySkin" scale={50} />
                <group name="pm0901_11_00_ArmSkin" scale={50} />
                <group name="pm0901_11_00_TailSkin" scale={50} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/regular/901.glb')

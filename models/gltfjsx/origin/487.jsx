/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/glb/origin/487.glb -o models/gltfjsx/origin/487.jsx 
Author: BodeMAN (https://sketchfab.com/dioguinifrsilva)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokemon-giratina-origin-240a861506294310b0e323a10a28fceb
Title: Pokémon Giratina (origin)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/origin/487.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 69.936, -5.67]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Cube_Body_0.geometry} material={materials.Body} />
          <mesh geometry={nodes.Cube_Material002_0.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cube_Material003_0.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Cube_Material004_0.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Cube_Material023_0.geometry} material={materials['Material.023']} />
          <mesh geometry={nodes.Cube_Material026_0.geometry} material={materials['Material.026']} />
          <mesh geometry={nodes.Cube_Material024_0.geometry} material={materials['Material.024']} />
          <mesh geometry={nodes.Cube_Material025_0.geometry} material={materials['Material.025']} />
          <mesh geometry={nodes.Cube_Material028_0.geometry} material={materials['Material.028']} />
          <mesh geometry={nodes.Cube_Material027_0.geometry} material={materials['Material.027']} />
          <mesh geometry={nodes.Cube_Material029_0.geometry} material={materials['Material.029']} />
          <mesh geometry={nodes.Cube_Material030_0.geometry} material={materials['Material.030']} />
          <mesh geometry={nodes.Cube_Material032_0.geometry} material={materials['Material.032']} />
          <mesh geometry={nodes.Cube_Material031_0.geometry} material={materials['Material.031']} />
          <mesh geometry={nodes.Cube_Material034_0.geometry} material={materials['Material.034']} />
          <mesh geometry={nodes.Cube_Material033_0.geometry} material={materials['Material.033']} />
          <mesh geometry={nodes.Cube_Material005_0.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.Cube_Material006_0.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Cube_Material019_0.geometry} material={materials['Material.019']} />
          <mesh geometry={nodes.Cube_Material020_0.geometry} material={materials['Material.020']} />
          <mesh geometry={nodes.Cube_Material022_0.geometry} material={materials['Material.022']} />
          <mesh geometry={nodes.Cube_Material021_0.geometry} material={materials['Material.021']} />
          <mesh geometry={nodes.Cube_Material001_0.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Cube_Material008_0.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.Cube_Material007_0.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Cube_Material010_0.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Cube_Material009_0.geometry} material={materials['Material.009']} />
          <mesh geometry={nodes.Cube_Material012_0.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Cube_Material011_0.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Cube_Material018_0.geometry} material={materials['Material.018']} />
          <mesh geometry={nodes.Cube_Material017_0.geometry} material={materials['Material.017']} />
          <mesh geometry={nodes.Cube_Material016_0.geometry} material={materials['Material.016']} />
          <mesh geometry={nodes.Cube_Material015_0.geometry} material={materials['Material.015']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D/main/models/glb/origin/487.glb')

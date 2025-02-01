import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber'


export default function Model() {
    const { nodes } = useGLTF("/short.glb");
    const { viewport } = useThree()
    const torus = useRef<THREE.Mesh>(null);
    
    useFrame( () => {
        if (torus.current) {
            torus.current.rotation.x += 0.02
        }
    })
    
    return (
        <group scale={viewport.width / 1.6} >
            <mesh ref={torus} {...nodes.Torus002}>
                <MeshTransmissionMaterial/>
            </mesh>
        </group>
    )
}
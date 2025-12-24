import { Object3DNode } from '@react-three/fiber'

declare module '@react-three/fiber' {
    interface ThreeElements {
        liquidMetalMaterial: Object3DNode<THREE.ShaderMaterial, typeof THREE.ShaderMaterial>
    }
}

import {
    BoxGeometry,
    CylinderGeometry,
    ExtrudeGeometry,
    MeshBasicMaterial,
    MeshStandardMaterial, RepeatWrapping,
    Shape,
    TextureLoader
} from "three";

import ClothTexture from '../assets/cloth.jpg'
import WoodTexture from '../assets/wood.jpg'
import {useLoader} from "@react-three/fiber";

// Shape for the cushion
const shape = new Shape()
shape.moveTo(0, 0)
shape.lineTo(0, 22)
shape.lineTo(0.5, 21.2)
shape.lineTo(0.5, 0.8)
shape.lineTo(0, 0)

const extrudeSetting = {steps: 1, depth: 1, bevelEnabled: false}
const cushionGeometry = new ExtrudeGeometry(shape, extrudeSetting)
const clothMaterial = new MeshStandardMaterial({
    color: 0x42a8ff,
    roughness: 0.4,
    metalness: 0,
    bumpScale: 1
})
const edgeSideGeometry = new BoxGeometry(1, 22, 1)
const edgeTopGeometry = new BoxGeometry(22, 1, 1)
const pocketGeometry = new CylinderGeometry(1, 1, 1.4, 20)
const pocketMaterial = new MeshBasicMaterial({color: 0x000000})

function PoolTable() {
    const clothTexture = useLoader(TextureLoader, ClothTexture)
    clothTexture.wrapS = RepeatWrapping
    clothTexture.wrapT = RepeatWrapping
    clothTexture.offset.set(0, 0)
    clothTexture.repeat.set(3, 6)

    const woodTexture = useLoader(TextureLoader, WoodTexture)
    const edgeMaterial = new MeshStandardMaterial({map: woodTexture})
    clothMaterial.map = clothTexture

    return (
        <object3D position={[0, 0, -1]}>
            {/*mesh for playing area*/}
            <mesh receiveShadow>
                <boxGeometry attach='geometry' args={[24, 48, 1]} />
                <meshStandardMaterial
                    attach='material'
                    color={0x42a8ff}
                    roughness={0.4}
                    metalness={0}
                    bumpScale={1}
                    map={clothTexture}
                />
            </mesh>

        </object3D>
    )
}

export default PoolTable;

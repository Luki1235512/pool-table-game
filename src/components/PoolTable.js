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

            {/*mesh for the side edges*/}
            {[
                [-12.5, 12, 0.7],
                [12.5, 12, 0.7],
                [-12.5, -12, 0.7],
                [12.5, -12, 0.7]
            ].map((pos, i) => {
                const idx = i
                return (
                    <mesh
                        key={idx}
                        args={[edgeSideGeometry, edgeMaterial]}
                        position={pos}
                    />
                )
            })}

            {/*mesh for the top edges*/}
            {[
                [0, 24.5, 0.7],
                [0, -24.5, 0.7]
            ].map((pos, i) => {
                const idx = i
                return (
                    <mesh
                        key={idx}
                        args={[edgeTopGeometry, edgeMaterial]}
                        position={pos}
                    />
                )
            })}

            {/*mesh for the cushion*/}
            {[
                [-12, 1, 0.2],
                [12, 1, 1.2],
                [-12, -23, 0.2],
                [12, -23, 1.2]
            ].map((pos, i) => {
                const idx = i
                return (
                    <mesh
                        key={idx}
                        args={[cushionGeometry, clothMaterial]}
                        position={pos}
                        rotation={
                            idx === 1 || idx === 3
                            ? [0, (180 * Math.PI) / 180, 0]
                            : [0, 0, 0]
                        }
                    />
                )
            })}


            {/*mesh for the top cushion*/}
            {[
                [-11, 24, 0.2],
                [11, -24, 0.2]
            ].map((pos, i) => {
                const idx = i
                return (
                    <mesh
                        key={idx}
                        args={[cushionGeometry, clothMaterial]}
                        position={pos}
                        rotation={
                            idx === 0
                            ? [0, 0, (-90 * Math.PI) / 180]
                            : [0, 0, (90 * Math.PI) / 180]
                        }
                    />
                )
            })}

            {/*mesh for the pockets*/}
            {[
                [-12, 24, 0],
                [12, 24, 0],
                [-12.5, 0, 0],
                [12.5, 0, 0],
                [-12.5, -24, 0],
                [12, -24, 0]
            ].map((pos, i) => {
                const idx = i
                return (
                    <mesh
                        key={idx}
                        args={[pocketGeometry, pocketMaterial]}
                        position={pos}
                        rotation={[1.5708, 0, 0]}
                    />
                )
            })}

        </object3D>
    )
}

export default PoolTable;

import React from 'react';
import {useThree} from "@react-three/fiber";
import Lights from "../components/Lights";
import PoolTable from "../components/PoolTable";

import zero from '../assets/textures/0.png'
import one from '../assets/textures/1.png'
import two from '../assets/textures/2.png'
import three from '../assets/textures/3.png'
import four from '../assets/textures/4.png'
import five from '../assets/textures/5.png'
import six from '../assets/textures/6.png'
import seven from '../assets/textures/7.png'
import eight from '../assets/textures/8.png'
import nine from '../assets/textures/9.png'
import ten from '../assets/textures/10.png'
import eleven from '../assets/textures/11.png'
import twelve from '../assets/textures/12.png'
import thirteen from '../assets/textures/13.png'
import fourteen from '../assets/textures/14.png'
import fifteen from '../assets/textures/15.png'
import PoolBall from "../components/PoolBall";

function Scene() {

    const {camera} = useThree()
    
    // useEffect(() => {
    //     camera.fov = 45
    //     camera.aspect = window.innerWidth / window.innerHeight
    //     camera.near = 0.1
    //     camera.far = 1000
    //
    //     camera.up.set(0, 0, 1)
    //     camera.position.set(-5, 7, 5)
    // }, [])

    camera.fov = 45;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.near = 0.1;
    camera.far = 1000;

    camera.up.set(0, 0, 1);
    camera.position.set(-5, 7, 5);
    

    return (
        <>
            <Lights
                type='AmbientLight'
                color={0xffffff}
                intensity={0.2}
                position={[0, 0, 0]}
            />
            {[[-5, -12, 20], [5, -12, 20], [-5, 12, 20], [5, 12, 20]].map((pos, index) => (
                <Lights key={index}
                    type='PointLight'
                    color={0xffffff}
                    intensity={0.4}
                    distance={100}
                    position={pos}
                    castShadow
                />))}
            <React.Suspense fallback={<mesh />}>
                <PoolTable />
            </React.Suspense>
            <object3D>
                <PoolBall position={[0, -16, 0]} textureURL={zero} />
                <PoolBall position={[-1.01, 15, 0]} textureURL={one} />
                <PoolBall position={[1.01, 17, 0]} textureURL={two} />
                <PoolBall position={[-0.51, 16, 0]} textureURL={three} />
                <PoolBall position={[-1.01, 17, 0]} textureURL={four} />
                <PoolBall position={[-2.02, 17, 0]} textureURL={five} />
                <PoolBall position={[1.53, 16, 0]} textureURL={six} />
                <PoolBall position={[0.51, 14, 0]} textureURL={seven} />
                <PoolBall position={[0, 15, 0]} textureURL={eight} />
                <PoolBall position={[0, 13, 0]} textureURL={nine} />
                <PoolBall position={[0.51, 16, 0]} textureURL={ten} />
                <PoolBall position={[2.02, 17, 0]} textureURL={eleven} />
                <PoolBall position={[-0.51, 14, 0]} textureURL={twelve} />
                <PoolBall position={[0, 17, 0]} textureURL={thirteen} />
                <PoolBall position={[-1.53, 16, 0]} textureURL={fourteen} />
                <PoolBall position={[1.01, 15, 0]} textureURL={fifteen} />
            </object3D>
        </>
    );
}

// <mesh>
//     <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
//     <meshNormalMaterial attach='material' />
// </mesh>

export default Scene

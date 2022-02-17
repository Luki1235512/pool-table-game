import React, {useRef} from "react";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {extend, useFrame, useThree} from "react-three-fiber";

extend({OrbitControls})

function Controls() {
    const controlsRef = useRef()
    const {camera, gl} = useThree()

    useFrame(() => controlsRef.current && controlsRef.current.update())

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
            enableRotate
            enablePan={false}
            maxDistance={100}
            minDistance={5}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
        />
    )
}

export default Controls

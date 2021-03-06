import React, {useMemo} from "react";
import {TextureLoader, Vector2} from "three";
import PropTypes from "prop-types";


function PoolBall({position, textureURL}) {
    const ballTexture = useMemo(() => new TextureLoader().load(textureURL), [textureURL])

    return (
        <mesh
            ref={React.createRef()}
            position={position}
            speed={new Vector2()}
            castShadow
        >
            <sphereGeometry attach='geometry' args={[0.5, 128, 128]} />
            <meshStandardMaterial
                attach='material'
                color={0xffffff}
                roughness={0.25}
                metalness={0}
                map={ballTexture}
            />
        </mesh>
    )
}

PoolBall.propTypes = {
    // setRef: PropTypes.objectOf(PropTypes.any),
    position: PropTypes.arrayOf(PropTypes.number),
    textureURL: PropTypes.string
}

PoolBall.defaultProps = {
    // setRef: {},
    position: [],
    textureURL: ''
}

export default PoolBall


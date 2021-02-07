import React from 'react'
import Loader from "react-loader";

export default function ReactLoader({loading}) {
    return (
        <Loader
        loaded={!loading}
        lines={12}
        length={15}
        width={7}
        radius={20}
        corners={1}
        rotate={0}
        direction={1}
        color="#000"
        speed={1}
        trail={60}
        shadow={false}
        hwaccel={false}
        className="spinner"
        zIndex={2e9}
        top="50%"
        left="50%"
        scale={1.0}
        loadedClassName="loadedContent"
      />
    )
}

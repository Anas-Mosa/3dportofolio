import {Html, useProgress } from '@react-three/drei'
import React from 'react'

function Loader() {
const {progress} = useProgress()
return (
<Html>
<p className='text-2xl text-white font-mono'>
{progress.toFixed(2)}%
</p>
</Html>
)
}

export default Loader
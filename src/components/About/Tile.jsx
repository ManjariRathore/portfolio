import React from 'react'

const Tile = ({skill, icon}) => {
  return (
    <div className='flex justify-center items-center p-5 text-xl m-3 rounded-full border-4 border-black'>
        {icon}
        <p>{skill}</p>
    </div>
  )
}

export default Tile
import React from 'react'

const Tile = ({skill, icon}) => {
  return (
    <div className='flex justify-center items-center h-[100%]  w-[100%] text-xl m-3 rounded-full border-black border-2 px-2 py-1'>
        {icon}
        <p>{skill}</p>
    </div>
  )
}

export default Tile
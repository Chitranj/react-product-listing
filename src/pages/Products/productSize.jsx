import React from 'react'

const ProductSize = ({width, height, depth}) => {
    return (
        <div className='mt-2'>
            <span className='text-sm font-medium'>Dimensions</span>
            <span className='bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1'>Width : {Math.ceil(width)}</span> 
            <span className='bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1'>Height :{Math.ceil(height)}</span> 
            <span className='bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1'>Depth :{Math.ceil(depth)}</span> 
        </div>
    )
}

export default ProductSize

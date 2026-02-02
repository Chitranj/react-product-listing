import React from 'react'

const Product = ({product}) => {
    return (
        <div className='border border-gray-400 rounded-2xl hover:border-gray-600'>
            <figure>
                <img src={product.thumbnail} alt={product.title} className='mx-auto w-[75%]'/>
            </figure>
            <hr className='border-gray-400 border-dashed'/>
            <div className=' bg-white rounded-b-2xl p-2'>
                <div>
                    <h3 className='text-sm font-medium'>{product.title}</h3>
                </div>
                <div className='flex flex-row content-center'>
                    <div className='text-xs font-medium'>₹ 450</div>
                    <div className='text-xs font-medium ms-2 text-gray-400 line-through'>₹ 500</div>
                    <button className='ml-auto text-[11px] border font-medium bg-green-500 border-green-600 text-gray-50 px-4 py-0.5 rounded-2xl cursor-pointer hover:border-green-300 hover:border-3'>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default Product

import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {

    const navigate = useNavigate();

    const handleGOToProductDetailsOnCLick = () => {
        navigate(`/product-details/${product.id}`);
    }

    let productTitle = product.title.length > 20 ? product.title.slice(0, 15) + '...' : product.title;
    return (
        <div className='border border-gray-300 rounded-xl hover:border-gray-400 cursor-pointer bg-white' onClick={handleGOToProductDetailsOnCLick}>
            <figure>
                <img src={product.thumbnail} alt={product.title} className='mx-auto w-[75%]'/>
            </figure>
            <hr className='border-gray-400 border-dashed'/>
            <div className='  rounded-b-xl p-2'>
                <div>
                    <h3 className='text-sm font-medium'>{productTitle}</h3>
                </div>
                <div className='flex flex-row content-center'>
                    <div className='text-xs font-medium'>₹ 450</div>
                    <div className='text-xs font-medium ms-2 text-gray-400 line-through'>₹ 500</div>
                    <button
                        className='ml-auto text-[11px] border font-medium bg-green-500 border-green-600 text-gray-50 px-4 py-0.5 
                            rounded-2xl hover:border-green-300 hover:border-3'>ADD
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product

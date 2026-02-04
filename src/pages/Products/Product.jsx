import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Product = ({product}) => {

    const [isImgLoad, setIsImgLoad] = useState(false);

    // const navigate = useNavigate();
    // const handleGOToProductDetailsOnCLick = () => {
    //     navigate(`/product-details/${product.id}`);
    // }

    let productTitle = product.title.length > 20 ? product.title.slice(0, 15) + '...' : product.title;
    return (
        <Link to={`/product-details/${product.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div className=' border border-gray-300 rounded-xl hover:border-gray-400 cursor-pointer bg-white'>
                <div className='relative w-full aspect-4/4 rounded-xl'>
                    {
                        !isImgLoad && (<div className='rounded-xl absolute inset-0 bg-gray-50 animate-pulse'></div>)
                    }
                    <figure>
                        <img 
                            src={product.thumbnail} 
                            alt={product.title} 
                            loading='lazy'
                            onLoad={() => setIsImgLoad(true)}
                            className={`w-full h-full object-cover transition-opacity duration-300
                                ${isImgLoad ? "opacity-100" : "opacity-0"}`}
                        />
                    </figure>
                </div>
                <hr className='border-gray-300 border-dashed'/>
                <div className='rounded-b-xl p-2'>
                    <div>
                        <Tippy content={product.title}>
                            <h3 className='text-sm font-medium'>{productTitle}</h3>
                        </Tippy>
                    </div>
                    <div className='flex flex-row content-center'>
                        <div className='text-xs font-medium'>₹ 450</div>
                        <div className='text-xs font-medium ms-2 text-gray-400 line-through'>₹ 500</div>
                        <button
                            className='ml-auto text-[11px] border font-medium bg-green-500 border-green-600 text-gray-50 px-4 py-0.5 
                                rounded-2xl hover:border-green-700'>ADD
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Product

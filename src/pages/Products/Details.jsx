import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../config/api';
import { useParams, useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faIndianRupee } from '@fortawesome/free-solid-svg-icons';

const Details = () => {

    const params = useParams();
    
    const [productDetails, setProductDetails] = useState({});
    const discountPercent = Math.floor(productDetails.discountPercentage);

    const newPrice = productDetails.price*((100-discountPercent)/100);

    const getSingleProduct = async () => {
        try {
            const url = `${API_BASE_URL}products/${params.pid}`;  
            const product = await axios.get(url);
            setProductDetails(product.data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect( () => {
        getSingleProduct();
    }, []);

    return (
        <>
            <div className='xl:w-[80%] md:w-[90%] my-5 mx-auto flex'>
                <div className='w-1/2 bg-white border border-gray-300 rounded-xl'>
                    <figure>
                        <img src={productDetails.thumbnail} alt={productDetails.title} className='h-100 w-auto mx-auto'/>
                    </figure>
                    <div className=''>
                        <div className='grid sm:grid-cols-6 m-5 gap-1 content-center justify-items-center'>
                            {
                                productDetails?.images?.length ? productDetails.images.map((images, index) => {
                                    return (
                                        <div className='border p-2 border-gray-200 rounded cursor-pointer hover:border-gray-400' key={index}>
                                            <img src={images} alt={images} className='w-25 h-auto mx-auto'/>
                                        </div>
                                    )
                                })
                                : ''
                            }
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='ms-4 flex flex-col'>
                        <h2 className='text-xl font-medium text-gray-700'>{productDetails.title}</h2>
                        <div className='flex mt-1'>
                            <div className='text-xs font-medium bg-green-700 px-2 py-0.5 rounded text-white content-center cursor-pointer'>
                                <span>{productDetails?.rating?.toFixed(1) ?? 0.0}</span>
                                <FontAwesomeIcon icon={faStar} className='ms-1 text-[10px]'/>
                            </div>
                            <div className='text-sm font-medium text-gray-600'>
                                <div className='ms-2'>3 Reviews</div>
                            </div>
                        </div>
                        <div className='mt-1'>
                            <FontAwesomeIcon icon={faIndianRupee} className='text-xl'/>
                            <span className='font-medium text-xl'>{Math.ceil(newPrice)}</span>
                            <span className='font-medium text-gray-600 ms-2 line-through text-sm'>
                                <FontAwesomeIcon icon={faIndianRupee} className=''/>{Math.ceil(productDetails.price)}
                            </span>
                            <span className='ms-2 text-sm text-green-600 font-medium'>{Math.floor(productDetails.discountPercentage)}% Off</span>
                        </div>
                        <div className='bg-gray-300 text-xs p-1 rounded mt-1 text-gray-800'>
                            <p>{productDetails.description}</p>
                        </div>
                        <div className='mt-2'>
                            <span className='text-sm font-medium'>Dimensions</span>  
                            <span className='bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1'>Width : 50</span> 
                            <span className='bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1'>Height :50</span> 
                            <span className='bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1'>Depth :50</span> 
                        </div>
                        <div className='mt-2'> 
                            <span className='bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1'>No warranty</span> 
                            <span className='bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1'>Ships in 1 month</span> 
                            <span className='bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1'>7 days return policy</span> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
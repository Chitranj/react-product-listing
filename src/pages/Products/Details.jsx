import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../config/api';
import { useParams, useSearchParams } from 'react-router-dom'

const Details = () => {

    const params = useParams();
    
    const [productDetails, setProductDetails] = useState({});

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
            <div className='w-[96%] my-5 mx-auto'>
                <div className='w-1/2 bg-white border border-gray-300 rounded-xl'>
                    <img src={productDetails.images} alt="" className='h-125 w-auto mx-auto'/>
                    <div className='m-7'>
                        <button className='bg-green-500 text-white px-3 py-2 rounded text-sm font-medium'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
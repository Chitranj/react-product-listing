import React, { useEffect, useState } from 'react'
import Product from './Product'
import { API_BASE_URL } from '../../config/api';
import axios from 'axios';
import ProductLoader from '../../skeleton/Products';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);

    const getProducts = async () => {
        try{
            setLoader(true);
            const url = `${API_BASE_URL}products`;

            const [response] = await Promise.all([
                axios.get(url),
                new Promise(res => setTimeout(res, 500))
            ]);

            setProducts(response.data.products);
            
        }catch(error) {
            console.log(error);
        }finally{
            setLoader(false);
        }
    }

    useEffect( () => {
        getProducts();
    }, []);

    return (
        <>
            <div className='grid 2xl:grid-cols-7 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 w-[96%] mx-auto my-5 gap-3'>
                {loader ? 
                    (
                        Array.from({ length: 21 }).map((_, i) => <ProductLoader key={i}/>)
                    )
                    : (
                        products.length > 0 && products.map((product) => <Product product={product} key={product.id}/>)
                    )
                }
                
            </div>
        </>
    )
}

export default Products

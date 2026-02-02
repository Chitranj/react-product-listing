import React, { useEffect, useState } from 'react'
import Product from './Product'
import { API_BASE_URL } from '../../config/api';
import axios from 'axios';

const Products = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try{
            const url = `${API_BASE_URL}products`;
            const response = await axios.get(url);
            setProducts(response.data.products);
            
        }catch(error) {
            console.log(error);
        }
    }

    useEffect( () => {
        getProducts();
    }, []);

    return (
        <>
            <div className='grid 2xl:grid-cols-7 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 w-[96%] mx-auto my-5 gap-3'>
                {
                    products.length && products.map((product) => {
                        return <Product product={product} key={product.id}/>
                    })
                }
                
            </div>
        </>
    )
}

export default Products

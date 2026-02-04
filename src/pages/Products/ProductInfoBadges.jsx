import React from 'react'

const ProductInfoBadges = ({item = []}) => {

    const className = `bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1`;

    return (
        <div className='mt-2'> 
            <span className=''>{productDetails.warrantyInformation}</span> 
            <span className='bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1'>{productDetails.shippingInformation}</span> 
            <span className='bg-gray-300 text-[11px] px-1 pb-0.5 rounded-md font-medium ms-1'>{productDetails.returnPolicy}</span> 
        </div>
    )
}
export default ProductInfoBadges

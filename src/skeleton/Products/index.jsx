import React from 'react'

const ProductLoader = () => {
	return (
		<div className='w-62.25 h-61.75 bg-white border rounded-xl border-gray-300 animate-pulse'>
			<div className='w-[90%] h-40 bg-gray-300 mx-auto my-3 rounded-xl'></div>

			<div className='p-2 bg-gray-300 rounded w-[90%] mx-auto'></div>
			<div className="flex items-center gap-2 w-[90%] mx-auto mt-2">
				<div className="h-3 w-10 bg-gray-300 rounded"></div>
				<div className="h-3 w-10 bg-gray-200 rounded"></div>
				<div className="ml-auto h-5 w-16 bg-gray-300 rounded-2xl"></div>
			</div>
		</div>
	)
}

export default ProductLoader

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-white py-4 px-12'>
            <Link to="/">
                <h2 className='font-medium text-xl text-gray-800'>Testing</h2>
            </Link>
        </div>
    )
}

export default Header

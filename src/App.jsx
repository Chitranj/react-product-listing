import React from 'react'
import Home from './pages/Home'
import Header from './pages/Header'
import Details from './pages/Products/Details'
import { Route, Routes } from 'react-router-dom'

const App = () => {
    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />}/>
                <Route path='/product-details/:pid' element={ <Details />}/>
            </Routes>
        </>
    )
}
export default App

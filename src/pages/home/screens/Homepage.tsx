import React from 'react'
import BestSeller from '../components/BestSeller'
import BlogIntro from '../components/BlogIntro/BlogIntro'
import NewProduct from '../components/NewProduct'

const Homepage = () => {
    return (
        <>
            <BestSeller />
            <NewProduct />
            <BlogIntro />
        </>
    )
}

export default Homepage
